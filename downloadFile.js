const aws = require('aws-sdk');

(async function(){
    try{

        const s3 = new aws.S3();

        // const responseList = await s3.listObjectsV2({
        //     Bucket: 'abracadabraboom',
        // }).promise();

        const responseFile = {
            Bucket: 'abracadabraboom',
            Key: 'magic.gif'
        };

        // console.log(responseList);

        s3.getObject(responseFile, function(err, data){
            if (err) console.log(err, err.stack);
            else console.log(data);
        })

    } catch(e){
        console.log('our error', e);
    }
})();