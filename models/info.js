var mongoose=require('mongoose');

module.exports = mongoose.model('info',{

	name:{
		type:String,
		default: ''
	   },

	email:{
           type:String,
           default: ''
	},
     
     grade:{
     	type:String,
     	default: ''
     }

});