const express = require("express");
const router = express.Router();
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const config = require("../config");

aws.config.update({
    secretAccessKey: config.secretAccessKey,
    accessKeyId: config.accessKeyId,
    region: config.region
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'braintumor272',
        key: function (req, file, cb) {
            //console.log(file);
            cb(null, Date.now().toString()+".jpeg"); //use Date.now() for unique file keys
        }
    })
}).single("image");



var visualRecognition = new VisualRecognitionV3({
    version: '2019-11-11',
    authenticator: new IamAuthenticator({
        apikey: config.apikey,
      }),
      url: config.url,
});

const listClassifiers = () => {
    const listClassifiersParams = {
        verbose: true,
      };
      
    visualRecognition.listClassifiers(listClassifiersParams)
    .then(response => {
        const classifiers = response.result;
        console.log(JSON.stringify(classifiers, null, 2));
    })
    .catch(err => {
        console.log('error:', err);
    });
}

router.post("/", (req, res) => {
    upload(req, res, function (err) {
        if (!err) {
            //console.log(req.file)
            
            var params = {
                url: req.file.location,
                classifierIds: config.classifier_ids,
                threshold: config.threshold
            };

            //listClassifiers(); //To list all available classifiers(Which are essentially trained models).

            visualRecognition.classify(params, function (err, response) {
                if (err) {
                    console.log(err);
                    res
                        .status(500)
                        .send(err);
                } else {
                    const classifiedImages = response.result;
                    console.log(JSON.stringify(classifiedImages.images[0].classifiers[0].classes[0], null, 2));
                    res
                        .status(200)
                        .send(JSON.stringify(classifiedImages.images[0].classifiers[0].classes[0], null, 2));
                }
            });
        }
        else {
            res
                .status(500)
                .send(err);
        }
    });
});

module.exports = router;