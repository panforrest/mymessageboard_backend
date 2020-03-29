var mongoose = require('mongoose')

var MessageSchema = new mongoose.Schema({
  user: {type:String, default:''},
  messageBody: {type:String, default:''},
})

MessageSchema.methods.summary = function(){
  var summary = {
  	id: this._id,
  	user: this.user,
  	messageBody: this.messageBody
  }

  return summary
}

module.exports = mongoose.model('MessageSchema', MessageSchema)