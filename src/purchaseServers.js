/** @param {NS} ns **/
export async function main(ns) {
	var boughtServ = ns.purchaseServer("serv", 1024);

	const myMoney = ns.getServerMoneyAvailable("home");

	for (var ram = ns.getPurchasedServerMaxRam(); ram > 1; ram / 2) {
		const serverLimit = ns.getPurchasedServerLimit();
		
		if(myMoney > (serverLimit * ns.getPurchasedServerCost(ram))) {
			
			await ns.write("myserv.txt", boughtServ + "", "w");
			for(var i = 0; i < serverLimit; i++) {
				ns.purchaseServer("serv", ram);
				await ns.write("myserv.txt", boughtServ + "\r\n", "a");
			}
		}
	}
	

}