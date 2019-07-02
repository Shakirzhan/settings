export default class AppService {
	constructor(txt) {
		this.txt = txt
	}

	log() {
		console.log( `[app service ${this.txt}]` )
	}
}