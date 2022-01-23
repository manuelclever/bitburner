/** @param {NS} ns **/

export async function main(ns) {
    const url = "https://raw.githubusercontent.com/ManuelClever/bitburner/main/src/";
    
    for(var i = 0; i < ns.args.length; i++) {
        var server = ns.args[i];

        await ns.wget(url + "controlCenter.js", "controlCenter.js", server);
        await ns.wget(url + "serverInfos.js", "serverInfos.js", server);
        await ns.wget(url + "install.js", "install.js", server);
        await ns.wget(url + "run.js", "run.js", server);
        await ns.wget(url + "download.js", "download.js", server);

        await ns.wget(url + "hx/foodnstuff.js", "/hx/foodnstuff.js", server);
        await ns.wget(url + "hx/harakiri-sushi.js", "/hx/harakiri-sushi.js", server);
        await ns.wget(url + "hx/hong-fang-tea.js", "/hx/hong-fang-tea.js", server);
        await ns.wget(url + "hx/iron-gym.js", "/hx/iron-gym.js", server);
        await ns.wget(url + "hx/jeosguns.js", "/hx/jeosguns.js", server);
        await ns.wget(url + "hx/n00dles.js", "/hx/n00dles.js", server);
    }
}