/** @param {NS} ns **/
import {findHackable} from "controlCenter.js";
import {hackServer} from "controlCenter.js";

export async function main(ns) {
    ns.run("hx_n00dles.js");
    ns.run("hx_foodnstuff.js");
    ns.run("hx_sigma-cosmetics.js")
    ns.run("hx_joesguns.js");
    ns.run("hx_hong-fang-tea.js");
    ns.run("hx_harakiri-sushi.js");
    ns.run("hx_iron-gym.js");
}