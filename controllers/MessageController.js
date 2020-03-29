var Promise = require('bluebird')
var Message = require('../models/Message')

module.exports = {
  find: function(params, isRaw){
  	return new Promise(function(resolve, reject){
  	  Message.find(params, function(err, messages){
  	  	if (err) {
  	  	  reject(err)
  	  	  return
  	  	}

  	  	if (isRaw){
  	  	  resolve(messages)
  	  	  return
  	  	}

  	  	var summaries = []
  	  	messages.forEach(function(message){
  	  	  summaries.push(message.summary())
  	  	})

  	  	resolve(summaries)
  	  })
  	})
  },

  create: function(params){
  	return new Promise(function(resolve, reject){
  	  Message.create(params, function(err, message){
  	  	if (err) {
  	  	  reject(err)
  	  	  return
  	  	}

  	  	resolve(message)
  	  })
  	})
  },  
}