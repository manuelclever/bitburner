/** @param {NS} ns **/
import {updateHackableTargets} from "controlCenter.js";
import {writeHxScripts} from "controlCenter.js";

export async function main(ns) {
    /** RAM */
    if (ns.args[0] == null) {
        ns.tprint("Please enter RAM size in GB as argument");
    } else {
        var serverRam = ns.args[0] - ns.getScriptRam("run.js");

        /** getTargets */
        await updateHackableTargets(ns);
        var file = ns.read("targets_hackable.txt");
        var targets = file.split("\r\n");

        /** createFiles */
        await writeHxScripts(ns);

        /** calculate RAM */
        const fileRam = ns.getScriptRam("/hx/" + targets[0] + ".js");

        const threadsPerFile = Math.floor((serverRam / fileRam) / targets.length);
        const restRam = serverRam - (threadsPerFile * targets.length * fileRam);
        var addXtraThread = Math.floor(restRam / fileRam);

        if(threadsPerFile > 0) {
            for(var i = 0; i < targets.length; i++) {
                var file = "/hx/" + targets[i] + ".js";

                if(addXtraThread > 0) {
                    await ns.run(file, threadsPerFile + 1);
                    addXtraThread--;
                } else {
                    await ns.run(file, threadsPerFile);
                }
            }
        } else {
            ns.tprint("Not enough RAM");
        }
    }
}