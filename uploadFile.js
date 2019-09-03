// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');

const filePath = './data/magic.gif';

// Create test name
const bucketName = 'abracadabraboom';

// Create unique bucket name
// const bucketName = 'node-sdk-sample-' + uuid.v4();
// Create name for uploaded object key
var keyName = 'magic.gif';

// Create a S3 service object
const s3 = new AWS.S3();

const uploadFile = (file, bucket, key) => {
  fs.readFile(file, (err, data) => {
    if (err) console.error(err);
    const base64data = new Buffer(data, 'binary');
    const params = {
      Bucket: bucket,
      Key: key,
      Body: base64data
    };
    s3.upload(params, (err, data) => {
      if (err) console.error(`Upload Error ${err}`);
      console.log('Upload Completed');
    });
  });
};

uploadFile(filePath, bucketName, keyName);