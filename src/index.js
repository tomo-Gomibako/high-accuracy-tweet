const twitter = require("./modules/twitter")
const NtpTimeSync = require("ntp-time-sync").default

const ntp = NtpTimeSync.getInstance()

async function main() {
	// const result = await ntp.getTime()
	// console.log(new Date())
	// console.log(result.now)
	// console.log(new Date())
	twitter.getTimeline()
}
main()
