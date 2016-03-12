/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: 'string',
      primaryKey: true
    },
    password: {
      type: 'string',
      required: true
    },
    name:{
    	type: 'string'
    },
    surname:{
    	type: 'string'
    },
    age: {
    	type: 'integer'
    },
    email: {
    	type: 'string'
    },
    phone:{
    	type: 'integer'
    },
    gender: {
    	type: 'string',
    	enum: ["Male", "Female", "Other"]
    },
    events:{
    	collection: 'event',
    	via: 'owner'
    },
    lives:{
    	model: 'city'
    },
	speaks:{
		collection: 'language',
		via:'spoken'
	},
	pd:{
		collection:'tags',
		via:'tagged'
	},
	ratings: {
		collection: 'rating',
		via: 'rated_user'
	},
	rate_user: {
		collection: 'rating',
		via: 'rater'
	}
  }
};

