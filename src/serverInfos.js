/** @param {NS} ns **/
import { findHackable } from "controlCenter.js";

export async function main(ns) {

	let myPromise = findHackable(ns);
	myPromise.then(function (hackableServers) {
		var targets = hackableServers;

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
	}, function (error) {
		ns.tprint("Error. Couldn't get Servers.");
	});
}