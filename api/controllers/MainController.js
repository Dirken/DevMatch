/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	showUser: function (req, res) {
    	/*var username = req.param("username");
    	user.findByUsername(username).done(function(err,usr){
    		if (err){
    			res.send(500, { error: "DB Error" });
    		}
    		else if (!usr){
    			res.send(400,{ error: "Not user in DB"});
    		}
    		else {
    			var matching = sails.util.pluck(usr,'username');
    			User.find({username: matching}).exec(function(err,answer){
    				res.view({friends: answer});
    			});
        	}
        });*/
	},
    showEvents: function (req, res) {
    	/*var events = req.param("event_id");
        Event.findByUsername(events).done(function(err,evn){
            if (err){
                res.send(500, { error: "DB Error" });
            }
            else if (!evn){
                res.send(400,{ error: "Not event in DB"});
            }
            else {
    			var matching = sails.util.pluck(usr,'events');
    			User.find({events: matching}).exec(function(err,answer){
    				res.view({evnts: answer});
    			});
        	}
        });*/
    }


};

