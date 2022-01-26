/** @param {NS} ns **/
export async function main(ns) {
	/** just to test methods */
	await writeHxScripts(ns);
}

export async function updateHackableTargets(ns) {
	var file = ns.read("targets.txt");
	var targets = file.split("\n");
	
	var hackable = getHackable(targets);
	await writeNewFile(hackable);

	/** functions */
	function getHackable(servers) {
		var hackableServers = new Array(servers.length);
		var index = 0;

		for(var i = 0; i < servers.length; i++) {
			var server = servers[i];
			if(ns.getServerRequiredHackingLevel(server) < ns.getHackingLevel()) {
				hackableServers[index] = server;
				index++;
			}
		}
		return shrink(hackableServers, index);

		function shrink(servers, size) {
			var shrunken = new Array(size);
			for(var i = 0; i < size; i++) {
				shrunken[i] = servers[i];
			}
			return shrunken;
		}
	}

	async function writeNewFile(servers) {
		var content = "";
		for(var i = 0; i < servers.length; i++) {
			content = content.concat(servers[i]);
			
			if(i !== (servers.length-1)) {
				content = content.concat("\n");
			}
		}
		await ns.write("targets_hackable.txt", content, "w");
	}
}

export async function writeHxScripts(ns) {
	await updateHackableTargets(ns);
	var file = ns.read("targets_hackable.txt");
	var targets = file.split("\n");

	for(var i = 0; i < targets.length; i++) {
		await writeNewFile(targets[i]);
	}

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

export async function hackServer (ns, server) {
	if (ns.hackAnalyzeChance(server) < 0.80 || ns.getServerSecurityLevel(server) > 20) {
		await ns.weaken(server);
	} else if ( (ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server) ) < 0.75) {
		await ns.grow(server);
	}else {
		await ns.hack(server);
	}
}