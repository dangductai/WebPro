 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const sanPhamSchema = new Schema({
 	name : {
 		type : String,
 		require : true
 	},
 	mota : {
 		type : String,
 		require : true
 	},
 	gia : {
 		type : Number,
 		require : true
 	},
 	image : {
 		type : String,
 		require : true
 	}
 },{collection : "Sanpham"});

 module.exports = mongoose.model('Sanpham',sanPhamSchema);