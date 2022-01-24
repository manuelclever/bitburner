/** @param {NS} ns **/
import {findHackable} from "controlCenter.js";
import {hackServer} from "controlCenter.js";

export async function main(ns) {
    var serverRam = ns.getServerRam("home");
    if (ns.args[0] !== "undefined") {
        serverRam = ns.args[0];
    }
    serverRam -= ns.getScriptRam("run.js");

    const fileRam = ns.getScriptRam("/hx/n00dles.js");
    const files = ["/hx/n00dles.js", "/hx/foodnstuff.js", "/hx/sigma-cosmetics.js",
                    "/hx/joesguns.js", "/hx/hong-fang-tea.js", "/hx/harakiri-sushi.js",
                    "/hx/iron-gym.js"];

    const threadsPerFile = Math.floor((serverRam / fileRam) / files.length);
    const restRam = serverRam - (threadsPerFile * files.length * fileRam);
    var addXtraThread = Math.floor(restRam / fileRam);

    if(threadsPerFile > 0) {
        for(var i = 0; i < files.length; i++) {
            if(addXtraThread > 0) {
                await ns.run(files[i], threadsPerFile + 1);
                addXtraThread--;
            } else {
                await ns.run(files[i], threadsPerFile);
            }
        }
    } else {
        ns.tprint("Not enough RAM");
    }
}