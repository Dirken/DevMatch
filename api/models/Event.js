/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		event_id:{
  			type: 'integer',
  			primaryKey: true
  		},
  		owner:{
    		model: 'user'
    	},
  		description:{
  			type: 'string'
  		},
  		destination:{
  			model: 'city',
  			unique: true
  		},
  		event_tags:{
  			collection:'tags',
  			via:'tag_event'
  		}			
  }
};

