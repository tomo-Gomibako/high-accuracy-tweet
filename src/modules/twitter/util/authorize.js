const OAuth2 = require("oauth").OAuth2

module.exports = function(consumerKey, consumerSecret) {
	return new Promise((resolve, reject) => {
		const oauth = new OAuth2(
			consumerKey,
			consumerSecret,
			"https://api.twitter.com/",
			null,
			"oauth2/token",
			null)
		oauth.getOAuthAccessToken(
			"",
			{ "grant_type": "client_credentials" },
			function(err, access_token, refresh_token, results) {
				if(err) {
					reject(err.data)
				}
				resolve(access_token)
			}
		)
	})
}

