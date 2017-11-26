import data from './data.json';
export default class Greet {
	constructor(){
		this.greet = document.createElement("div");
		this.greet.innerHTML=data.msg;
		
	}
}