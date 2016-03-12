/**
 * RelationshipsController
 *
 * @description :: Server-side logic for managing Relationships
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	relationships: function (req, res) {
<<<<<<< HEAD
    	var username = req.param("username");
    	user.findByUsername(username).done(function(err,usr){
    		if (err){
    			res.send(500, { error: "DB Error" });
    		}
    		else if (!usr){
    			res.send(400,{ error: "Not user in DB"});
    		}
    		else {
    			Pet.query('SELECT DISTINCT * FROM User', function(err, results) {
  				if (err) return res.serverError(err);
  				return res.ok(results.rows);
				});
        	}
        });
=======
        var myQuery = User.find();
        myQuery.where({'name':{startsWith:'J'}});
>>>>>>> 188154d3b56b66d31afbbc76475836626e77dd1a
	}
};

