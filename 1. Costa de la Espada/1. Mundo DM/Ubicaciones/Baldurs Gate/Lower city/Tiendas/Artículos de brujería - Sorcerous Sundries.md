https://forgottenrealms.fandom.com/wiki/Sorcerous_Sundries

## Objetos a la venta

https://www.thievesguild.cc/shops/shop-magicitem#tab1

[[downtime-activity-buying-a-magic-item-xge|Downtime Activity: Buying a Magic Item]]

```dataviewjs
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function extraerPage(str) {
	//const str = lista.join("");
	const regex = /\(([^()]*)\)[^()]*$/;
	const match = str.match(regex);
	if (match && match[1]) {
		return match[1];
	} 
	return str;
}

function extraerValor(lista, tipo) {
	const regexMap = {
		rarity: /rarity\/([^/]+)/,
		wondrous: /wondrous\/([^/]+)/
	};
	
	const regex = regexMap[tipo];
	if (!regex) return null;
	
	for (const str of lista) {
		const match = str.match(regex);
		if (match) {
			return match[1];
		} 
	}
	return null;
}

function getItemPrice(rarity, wondrous) {
	var cost = "";
	if (rarity == "common") {
		cost += "`dice: (1d6 + 1) * 10";
	}
	else if (rarity == "uncommon") {
		cost += "`dice: 1d6 * 100";
	}
	else if (rarity == "rare") {
		cost += "`dice: 2d10 * 1000";
	}
	else if (rarity == "very-rare") {
		cost += "`dice: (1d4 + 1) * 10000";
	}
	else if (rarity == "legendary") {
		cost += "`dice: 2d6 * 25000";
	}
	if (wondrous == "scroll" || wondrous == "potion") {
		cost += "/ 2"
	}
	return cost + "` gp";
}

const diceRollerPlugin = await window.DiceRoller;

var diceRoller = await diceRollerPlugin.getRoller("1d6");

const magicItemTablesNames = [
	"[[magic-item-table-a#^magic-item-table-a]]",
	"[[magic-item-table-b#^magic-item-table-b]]",
	"[[magic-item-table-c#^magic-item-table-c]]",
	"[[magic-item-table-d#^magic-item-table-d]]",
	"[[magic-item-table-e#^magic-item-table-e]]",
	"[[magic-item-table-f#^magic-item-table-f]]",
	"[[magic-item-table-g#^magic-item-table-g]]",
	"[[magic-item-table-h#^magic-item-table-h]]",
	"[[magic-item-table-i#^magic-item-table-i]]"
]

var tableLetter = "A";

const tableCheckTotal = [
	"1-5",
	"6-10",
	"11-15",
	"16-20",
	"21-25",
	"26-30",
	"31-35",
	"26-40",
	"41+"
]

for (let i in magicItemTablesNames) {
	//dv.list(tableName)
	var magicItemTable = await diceRollerPlugin.getRoller(magicItemTablesNames[i]);
	
	var dice = await diceRoller.roll();
	
	var resultTable = [];
	
	for (let i=0; i < dice; i++) {
		await magicItemTable.roll();
		const item = magicItemTable.result;
		//dv.list(item);
	
		const pagePath = extraerPage(item);
		console.log(pagePath)
		const page = dv.page(pagePath);
	
		var cost = "";
		if (pagePath == "compendium/items/potion-of-healing.md") {
			cost = "50 gp";
		}
		else if (page != null && page.tags != undefined) {
			const rarity = extraerValor(page.tags, "rarity");
			const wondrous = extraerValor(page.tags, "wondrous");
			cost = getItemPrice(rarity, wondrous);
		}
		
		resultTable.push([item, cost]);
	}
	
	dv.table(
		["Magic Item Table " + tableLetter + " (" + tableCheckTotal[i] + ")",
		 "Cost"],
		resultTable
	);
	tableLetter = nextChar(tableLetter);
}

```

## Imágenes 

![[Pasted image 20240820095014.png]]
![[Pasted image 20240820095036.png]]