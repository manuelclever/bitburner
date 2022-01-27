/** @param {NS} ns **/
import {updateHackableTargets} from "controlCenter.js";

export async function main(ns) {
	await updateHackableTargets(ns);
	var file = ns.read("targets_hackable.txt");
	var targets = file.split("\r\n");

	
	for(var i = 0; i < targets.length; i++) {
		installer(targets[i]);
	}

	function installer(server) {
		ns.tprint(server + " installing...");
		ns.brutessh(server);
		ns.ftpcrack(server);
		ns.relaysmtp(server);
		ns.httpworm(server);
		ns.sqlinject(server);
		ns.nuke(server);
		/**ns.installBackdoor(server);**/
	}
}