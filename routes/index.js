let express = require('express');
let router = express.Router();
let uploadFile = require('../server/upload-file');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NICO-MODOKI' });
});

/* 画像アップロードテスト */
router.get('/upload-test/',(req, res, next)=>{
  uploadFile('./public/images/test.jpg')
    .then((resp)=>{
      console.log(resp);
      res.render('upload-test', {resp});
    });
});

module.exports = router;
