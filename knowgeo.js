
function Levenshtein(questionCount, isRandom) {
	
	const myDictionary = [

		"North America's hemisphere location",
		"North America's % of land",
		"North America's main geographic features",
		"North America's number of countries",
		"North America's population size",
		"North America's key countries",
		"North America's language profile",
		"North America's micro-history",
		"North America's micro-political profile",
		"North America's cultural profile",

		"South America's hemisphere location",
		"South America's % of land",
		"South America's main rivers",
		"South America's main mountains",
		"South America's main geographic features",
		"South America's number of countries",
		"South America's population size",
		"South America's largest & most populous country",
		"South America's most populous city",
		"South America's key countries",
		"South America's language profile",
		"South America's micro-history",
		"South America's micro-political profile",
		"South America's cultural profile",

		"Europe's hemisphere location",
		"Europe's % of land",
		"Europe's bordering entities",
		"Europe's key mountain ranges",
		"Europe's number of countries",
		"Europe's population size",
		"Europe's largest & most populous country",
		"Europe's top 5 languages",
		"Europe's micro-history",
		"Europe's micro-political profile",
		"Europe's cultural profile",

		"Africa's hemisphere location",
		"Africa's % of land",
		"Africa's main geographic features",
		"Africa's number of countries",
		"Africa's population size",
		"Africa's largest country",
		"Africa's most populous country",
		"Africa's general language profile",
		"Africa's micro-history",
		"Africa's micro-political profile",
		"Africa's cultural profile",

		"Asia's hemisphere location",
		"Asia's % of land",
	    "Asia's main geographic features",
	    "Asia's number of countries",
	    "Asia's population size",
	    "Asia's largest country",
	    "Asia's most populous country",
	    "Asia's key countries",
	    "Asia's general language profile",
	    "Asia's micro-history",
	    "Asia's micro-political profile",
	    "Asia's cultural profile",

		"Oceania's hemisphere location",
		"Oceania's % of land",
	    "Oceania's main geographic feature",
	    "Oceania's population size",
	    "Oceania's largest country",
	    "Oceania's most populous country",
	    "Oceania's largest city",
	    "Oceania's main cultural regions",
	    "Oceania's general language profile",
	    "Oceania's micro-history",
	    "Oceania's micro-political profile",
	    "Oceania's cultural profile"
	];


	if (isRandom == true) {
		return getRandomSubarray(myDictionary, questionCount).join("<br><br>").concat("<br><br>");
	} else {
		return getRandomContiguousSubarray(myDictionary, questionCount).join("<br><br>").concat("<br><br>");
	}

}

function getRandomContiguousSubarray(arr, size) {
	var start = getRndInteger(0, arr.length - size - 1);
	var end = start + size;
	return arr.slice(start, end);
}

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}