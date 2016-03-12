/**
 * MatchController
 *
 * @description :: Server-side logic for managing matches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	find: function (req, res){
		User.query(('SELECT user.email FROM user'), function(err, results) {
			if(err) res.send(400);
			else return res.send(results);
		});	
	}
	
};

