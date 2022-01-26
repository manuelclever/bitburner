/** @param {NS} ns **/
import { findHackable } from "controlCenter.js";

export async function main(ns) {

	let myPromise  = findHackable(ns);
	await myPromise.then(async function(hackableServers) {
		for(var i = 0; i < hackableServers.length; i++) {
			await writeNewFile(hackableServers[i]);
		}

	}, function(error) {
		ns.tprint("Error. Couldn't get Servers.");
	});

	async function writeNewFile(server) {
		ns.tprint("Write new hx file for " + server);

		var content = "/** @param {NS} ns **/\n" +
						"import {hackServer} from 'controlCenter.js';\n" +
						"\n" +
						"export async function main(ns) {\n" +
						"\twhile(true) {\n" +
						"\t\tawait hackServer(ns, '" + server + "');\n" +
						"\t}\n" +
						"}\n";

		await ns.write("/hx/" + server + ".js", content, "w");
	}
}