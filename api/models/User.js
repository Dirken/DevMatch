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
    age: {
    	type: 'integer'
    },
    email: {
    	type: 'string'
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
	PD:{
		collection:'tags',
		via:'tagged'
	}
  }
};

