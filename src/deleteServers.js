/** @param {NS} ns */
export async function main(ns) {
	const servers = ns.read("myserv.txt");
	const array = servers.split("\r\n");

	for(var i = 0; i < array.length; i++) {
		ns.deleteServer(array[i]);
	}
}