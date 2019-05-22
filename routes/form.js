const express = require('express');
const router = express.Router();



router.route('/').get(getFormData);
router.route('/').post(formPost);

function getFormData(req, res, next){
  res.send('This is form data')
}

function formPost(req, res, next){
  res.send(req.body);
}

module.exports = router;