const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name : {
 		type : String,
 		require : true
 	},
 	email : {
 		type : String,
 		require : true
 	},
 	pass : {
 		type : String,
 		require : true
 	}
 },{collection : "user"});

module.exports = mongoose.model('user',userSchema);