const aws = require('aws-sdk');
const fs = require('fs');

const filePath = '../downloaded/magic.gif';
const bucketName = 'abracadabraboom';
const key = 'magic.gif';

const downloadFile = async (filePath, bucketName, key) => {
    try{

        const s3 = new aws.S3();

        const responseFile = {
            Bucket: bucketName,
            Key: key
        };

        s3.getObject(responseFile, function(err, data){
            if (err) console.log(err, err.stack);
            else fs.writeFileSync(filePath, data.Body);
            console.log(`${filePath} has been created!`);;
        })

    } catch(err){
        console.log(`Download Error ${err}`);
    }
};

downloadFile(filePath, bucketName, key);