/**
 * RelationshipsController
 *
 * @description :: Server-side logic for managing Relationships
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	relationships: function (req, res) {
        var myQuery = User.find();
        myQuery.where({'name':{startsWith:'J'}});
	}
};

