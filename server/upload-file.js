let Promise = require('bluebird');
var cloudinary = require('cloudinary');

// TODO シングルトンにして、その中キーなどを設定する
cloudinary.config({
    cloud_name: process.env.CLOUDINALY_CLOUD_NAME,
    api_key: process.env.CLOUDINALY_API_KEY,
    api_secret: process.env.CLOUDINALY_API_SECRET
});

/**
 * ローカルファイルをcloudinaryにアップロードする
 *
 * @param filePath ファイルパス
 * @returns {Promise}
 */
function uploadFile(filePath) {
    return new Promise((resolve, reject)=>{
        cloudinary.uploader.upload(filePath, resolve);
    });
}

module.exports = uploadFile;