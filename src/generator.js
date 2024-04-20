function nameGenerator(){
	array1 = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99");

	array2 = new Array("White","Black","Red","Blue","Green","Aquamarine","Golden","Indigo","Radiant","Dark","Bright","Juggernaut","Liminal","Furious","Vigilant","Wilful","Turbulent","Shining","Sorrowful","Ardent","Adamant","Painful","Docile","Frozen","Burning","Cold","Hot","Verdant","Silent","Hopeful","Endless","Infinite","Gilded","Paper","Bloody","Recursive","Empty");

	array3 = new Array("Chain","Blossom","Star","Gaze","Blade","Disc","Stream","River","Ocean","Mountain","Tower","Temple","Shield","Spear","Flame","Cloud","Storm","Wave","Tide","Tree","Gale","Dome","Tome","Orb","Scar","Breath","Song","Voice","Word","Thorn","Stone","Concordance","Spirit","Field","Hammer","Chisel","Ingot","Smoke","Crown","Wing","Chariot","Bridge","Flower","Continent","Comet","Moon","Meteor","Anvil","Forge","Mask","Student","Feather","Scale","Hand","Eye","Sigil");

	array4 = new Array("Subdues","Scours","Punctures","Purges","Accuses","Protects","Combats","Apprehends","Breaks","Shatters","Heals","Repairs","Engulfs","Questions","Crushes","Perceives","Analyzes","Enlightens","Seals","Defeats","Vanquishes");

	array5 = new Array("Evil","the Universe","the Unrepentant","the Horizon","the Void","Darkness","the Truthful","the Untruthful","the Fortunate","the Unfortunate","the Sinful","God","the Gods","the Repentant","the Wise","the Unwise","the Holy","the Unholy","the World","Civilization","the Proud","the Greedy","the Lustful","the Wrathful","the Gluttonous","the Envious","the Slothful","the Meek","the Poor","the Hungry","the Dead","the Living","the Sun","Space-Time","the Wicked","Truth","Reality","Lies","the Virtuous");

	strRandomizer=array1[Math.floor(Math.random()*array1.length)] + " " + array2[Math.floor(Math.random()*array2.length)] + " " + array3[Math.floor(Math.random()*array3.length)] + " " + array4[Math.floor(Math.random()*array4.length)] + " " + array5[Math.floor(Math.random()*array5.length)] + " ";


	return strRandomizer;
	
}


function generateName(){
	let newName = nameGenerator();

	document.getElementById("result").textContent = newName;
}