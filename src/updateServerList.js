/** @param {NS} ns */
export async function main(ns) {
	const servers = ns.getPurchasedServers(true);

	await ns.write("myserv.txt", "", "w");	
	for(var i = 0; i < servers.length; i++)  {
		await ns.write("myserv.txt", servers[i] + "\r\n", "a");
		
	}
}