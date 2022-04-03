/** @param {NS} ns **/
export async function main(ns) {
	var boughtServ = ns.purchaseServer("serv", 1024);

	const myMoney = ns.getServerMoneyAvailable("home");
	const serverLimit = ns.getPurchasedServerLimit();
	if(ns.getPurchasedServers(true).length < serverLimit) {
		for (var ram = ns.getPurchasedServerMaxRam(); ram >= 1000; ram = ram / 2) {
			
			if(myMoney > (serverLimit * ns.getPurchasedServerCost(ram))) {
				
				await ns.write("myserv.txt", boughtServ + "", "w");
				for(var i = 0; i < serverLimit; i++) {
					ns.purchaseServer("serv", ram);
					await ns.write("myserv.txt", boughtServ + "\r\n", "a");
				}
			}
		}
	}
	

}