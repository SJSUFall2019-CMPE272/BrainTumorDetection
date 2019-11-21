const express = require("express");
const router = express.Router();
const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { apiKey } = require("../config");

var visualRecognition = new VisualRecognitionV3({
    version: '2019-11-11',
    iam_apikey: apiKey
});

const brainImageStorage = multer.diskStorage({
    destination: path.join(__dirname, '..') + '/public/uploads/brain',
    filename: (req, file, cb) => {
        cb(null, 'brain-' + Date.now() + path.extname(file.originalname));
    }
});

const brainUploads = multer({
    storage: brainImageStorage,
    limits: { fileSize: 50000000 },
}).single("image");

router.post("/", (req, res) => {
    brainUploads(req, res, function (err) {
        if (!err) {
            var images_file = fs.createReadStream(path.join(__dirname, '..') + '/public/uploads/brain/' + req.file.filename);
            var classifier_ids = ["MRIDetectionModel_1899614081"];
            var threshold = 0.6;
            
            var params = {
                images_file: images_file,
                classifier_ids: classifier_ids,
                threshold: threshold
            };
            
            visualRecognition.classify(params, function (err, response) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(response)
                }
            });
        }
        else {
            console.log("Error!");
        }
    });
});

module.exports = router;