var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

/* GET */
router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]

  if (controller == null){
  	res.json({
  	  confirmation: 'fail',
  	  message: 'invalid resrouce'
  	})

  	return
  }

  controller.find(req.query, false)
  .then(function(results){
  	res.json({
  	  confirmation: 'success',
  	  results: results
  	})
  })
  .catch(function(err){
  	res.json({
  	  confirmation: 'fail',
  	  message: err
  	})
  })
})

/* POST */
router.post('/:resource', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]

  if (controller == null){
  	res.json({
  	  confirmation: 'fail',
  	  message: 'invalid resrouce'
  	})

  	return
  }

  controller.create(req.body)
  .then(function(result){
  	res.json({
  	  confirmation: 'success',
  	  result: result
  	})
  })
  .catch(function(err){
  	res.json({
  	  confirmation: 'fail',
  	  message: err
  	})
  })
})

module.exports = router;