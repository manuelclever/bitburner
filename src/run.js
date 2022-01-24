/** @param {NS} ns **/
import {findHackable} from "controlCenter.js";
import {hackServer} from "controlCenter.js";

export async function main(ns) {
    const fileRam = ns.getScriptRam("/hx/n00dles.js");
    const serverRam = ns.getServerMaxRam("xtra");
    const files = ["/hx/n00dles.js", "/hx/foodnstuff.js", "/hx/sigma-cosmetics.js",
                    "/hx/joesguns.js", "/hx/hong-fang-tea.js", "/hx/harakiri-sushi.js",
                    "/hx/iron-gym.js"];

    ns.tprint(serverRam + "/" + fileRam + "/" + files.length);
    const threadsPerFile = (serverRam / fileRam) / files.length;

    for(var i = 0; i < files.length; i++) {
        await ns.run(files[i], threadsPerFile);
    }
}