/** @param {NS} ns **/
import {findHackable} from "controlCenter.js";

export async function main(ns) {
var allServers = ns.scan("home");
	
	let myPromise  = findHackable(ns, allServers);
	myPromise.then(function(hackableServers) {

		for(var i = 0; i < hackableServers.length; i++) {
			installer(hackableServers[i]);
		}

	}, function(error) {
		ns.tprint("Error. Couldn't get Servers.");
	});

	function installer(server) {
		ns.tprint(server + " installing...");
		ns.brutessh(server);
		ns.ftpcrack(server);
		ns.nuke(server);
		/**ns.installBackdoor(server);**/
	}
}