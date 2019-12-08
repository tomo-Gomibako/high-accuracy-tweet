const OAuth2 = require("oauth").OAuth2
const getToken = require("../util/getToken")

module.exports = async function() {
	const token = getToken()
	const oauth = new OAuth2(
		token.consumerKey,
		token.consumerSecret,
		"https://api.twitter.com/",
		null,
		"oauth2/token",
		null)
	oauth.getOAuthAccessToken(
		"",
		{ "grant_type": "client_credentials" },
		function(err, access_token, refresh_token, results) {
			console.log("bearer: ", access_token)
		}
	)
}
