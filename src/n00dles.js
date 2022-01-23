/** @param {NS} ns **/
import {hackServer} from "controlCenter.js";

export async function main(ns) {
	while(true) {
		await hackServer(ns, "n00dles");
	}
}