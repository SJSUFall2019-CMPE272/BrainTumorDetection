const config = {
    "apikey": process.env.APIKEY,
    "iam_apikey_description": process.env.APIKEY_DESCRIPTION,
    "iam_apikey_name": process.env.APIKEY_NAME,
    "iam_role_crn": process.env.ROLE,
    "iam_serviceid_crn": process.env.SERVICEID,
    "url": process.env.URL,
    "secretAccessKey": process.env.SECRETKEY,
    "accessKeyId": process.env.ACCESSKEYID,
    "region": 'us-west-1',
    "classifier_ids": ["DefaultCustomModel_1573716855"],
    "threshold": 0.6
  };

module.exports = config