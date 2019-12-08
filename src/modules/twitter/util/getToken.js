module.exports = function() {
	const token = {
		consumerKey: process.env.TWITTER_CONSUMER_KEY,
		consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
		userKey: process.env.TWITTER_USER_KEY,
		userSecret: process.env.TWITTER_USER_SECRET
	}
	const missingKeys = []
	for(const key in token) {
		// console.log(`${key}: ${token[key]}`)
		if(!token[key].trim()) {
			missingKeys.push(key)
		}
	}
	if(missingKeys.length > 0) {
		throw new Error(`Missing Access Token(s): ${missingKeys.join(", ")}`)
	}
	return token
}
