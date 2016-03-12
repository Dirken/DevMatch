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
    	type: 'email'
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
	},
	toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
  },
  beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }	
};

