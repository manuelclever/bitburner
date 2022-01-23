/** @param {NS} ns **/
export async function main(ns) {
	while(true) {
		await hackServer(ns, "foodnstuff");
	}
}

async function hackServer (ns, server) {
	if ( (ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server) ) < 0.4) {
		await ns.grow(server);
	} else if (ns.hackAnalyzeChance < 0.75 || ns.getServerSecurityLevel > 25) {
		await ns.weaken(server);
	} else {
		await ns.hack(server);
	}
}