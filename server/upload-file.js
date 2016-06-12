let Promise = require('bluebird');
var cloudinary = require('cloudinary');

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