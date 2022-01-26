/** @param {NS} ns **/
import {updateHackableTargets} from "controlCenter.js";

export async function main(ns) {
	await updateHackableTargets(ns);
	var file = ns.read("targets_hackable.txt");
	var targets = file.split("\n");

	for (var i = 0; i < targets.length; i++) {
		var server = targets[i];

		var money = ns.getServerMoneyAvailable(server);
		var maxMoney = ns.getServerMaxMoney(server);
		var moneyPercentage = Math.round((money / maxMoney) * 100);
		var rootAccess = ns.hasRootAccess(server);
		var security = Math.round(ns.getServerSecurityLevel(server));
		var hackingTime = Math.round(ns.getHackTime(server) / 1000);
		var anaylzeChance = Math.round(ns.hackAnalyzeChance(server) * 100);

		ns.tprint(server + ":");
		ns.tprint("\troot: " + rootAccess +
			"\n\t\t\tmoney: " + money + " (" + moneyPercentage + "%)" +
			"\n\t\t\tmaxMoney: " + maxMoney +
			"\n\t\t\tsecurity: " + security +
			"\n\t\t\thackTime: ~ " + hackingTime + "s" +
			"\n\t\t\thackChance: ~ " + anaylzeChance + "%");
	}
}