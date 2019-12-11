const { getToken, authorize } = require("../util")

module.exports = async function() {
	const token = getToken()
	const bearer = await authorize(token.consumerKey, token.consumerSecret)
	console.log("bearer: ", bearer)
}
