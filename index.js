var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
var visualRecognition = new VisualRecognitionV3({
	version: '2018-03-19',
	iam_apikey: process.env.IAM_APIKEY
});

var images_file= fs.createReadStream('./test.jpg');
var classifier_ids = [process.env.CLASSIFIER_IDS];
var threshold = 0.6;

var params = {
	images_file: images_file,
	classifier_ids: classifier_ids,
	threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
	if (err) { 
		console.log(err);
	} else {
		console.log(JSON.stringify(response, null, 2))
	}
});