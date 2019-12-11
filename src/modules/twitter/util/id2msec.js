module.exports = function(id) {
	const bigintId = BigInt(id)
	return Number((bigintId / 4194304n) + 1288834974657n)
}
