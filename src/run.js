/** @param {NS} ns **/
import {findHackable} from "controlCenter.js";
import {hackServer} from "controlCenter.js";

export async function main(ns) {
    await ns.run("/hx/n00dles.js");
    await ns.run("/hx/foodnstuff.js");
    await ns.run("/hx/sigma-cosmetics.js")
    await ns.run("/hx/joesguns.js");
    await ns.run("/hx/hong-fang-tea.js");
    await ns.run("/hx/harakiri-sushi.js");
    await ns.run("/hx/iron-gym.js");
}