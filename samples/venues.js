var partybot = require('./'),
	constants = require('./constants');

var organisationId = '57f37f24f6892ee1d555471d';
partybot.venues.getAllInOrganisation(organisationId, function(err, response, body) {
	
		console.log(response.statusCode);
		console.log(body);
		console.log(err);

});
var venueId = '57f380f17fb36ae92003647b';
partybot.venues.getWithOriganisationIdAndVenueId(organisationId, venueId, function(err, response, body) {
	
		console.log(response.statusCode);
		console.log(body);
		console.log(err);

});

partybot.venues.getWithId(venueId, function(err, response, body) {
	
		console.log(response.statusCode);
		console.log(body);
		console.log(err);

});

var params = {
	organisationId: organisationId,
	name: "Valkyrie",
	description: "Description of Valkyrie"
};

partybot.venues.create(params, function(err, response, body) {
	
	console.log(response.statusCode);
	console.log(body);
	console.log(err);

});

organisationId = '57f3a270f760e4f8ad97eec4';
venueId = '57ff62f710b78b00117ee63a';
var updateParams = {
	organisationId: organisationId,
	venueId: venueId,
	name: "Venue Name",
	description: "Venue description",
	image: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/1f2/03a/1a0ed21.jpg"
};

partybot.venues.updateWithOrganisationIdAndVenueId(updateParams, function(err, response, body) {
	cl("Error: " +JSON.stringify(err, null, 2));
	cl("Response : " +response.statusCode || null);
	cl("Body: " +JSON.stringify(body, null, 2));
});