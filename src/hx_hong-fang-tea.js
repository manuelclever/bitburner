/** @param {NS} ns **/
import {hackServer} from "controlCenter.js";

export async function main(ns) {
	while(true) {
		await hackServer(ns, "hong-fang-tea");
	}
}