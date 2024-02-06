
function Levenshtein(questionCount, isRandom) {
	
	const myDictionary = [

		"North America's hemisphere location",
		"North America's % of land",
		"North America's key mountain ranges",
		"North America's key rivers",
		"North America's key lakes",
		"North America's key forest",
		"North America's key desert",

		"North America's number of countries",
		"North America's population size",
		"North America's key countries",
		"North America's key cities",
		"North America's largest country",
		"North America's most populous country",

		"North America's language profile",
		"North America's micro-history",
		"North America's micro-political profile",
		"North America's micro-cultural profile",


		"South America's hemisphere location",
		"South America's % of land",
		"South America's key mountain ranges",
		"South America's key rivers",
		"South America's key lakes",
		"South America's key forest",
		"South America's key desert",

		"South America's number of countries",
		"South America's population size",
		"South America's key countries",
		"South America's key cities",
		"South America's largest country",
		"South America's most populous country",

		"South America's language profile",
		"South America's micro-history",
		"South America's micro-political profile",
		"South America's micro-cultural profile",



		"Europe's hemisphere location",
		"Europe's % of land",
		"Europe's key mountain ranges",
		"Europe's key rivers",
		"Europe's key lakes",
		"Europe's key forest",
		"Europe's key desert",

		"Europe's number of countries",
		"Europe's population size",
		"Europe's key countries",
		"Europe's key cities",
		"Europe's largest country",
		"Europe's most populous country",

		"Europe's language profile",
		"Europe's micro-history",
		"Europe's micro-political profile",
		"Europe's micro-cultural profile",



		"Africa's hemisphere location",
		"Africa's % of land",
		"Africa's key mountain ranges",
		"Africa's key rivers",
		"Africa's key lakes",
		"Africa's key forest",
		"Africa's key desert",

		"Africa's number of countries",
		"Africa's population size",
		"Africa's key countries",
		"Africa's key cities",
		"Africa's largest country",
		"Africa's most populous country",

		"Africa's language profile",
		"Africa's micro-history",
		"Africa's micro-political profile",
		"Africa's micro-cultural profile",



		"Asia's hemisphere location",
		"Asia's % of land",
		"Asia's key mountain ranges",
		"Asia's key rivers",
		"Asia's key lakes",
		"Asia's key forest",
		"Asia's key desert",

		"Asia's number of countries",
		"Asia's population size",
		"Asia's key countries",
		"Asia's key cities",
		"Asia's largest country",
		"Asia's most populous country",

		"Asia's language profile",
		"Asia's micro-history",
		"Asia's micro-political profile",
		"Asia's micro-cultural profile",



		"Oceania's hemisphere location",
		"Oceania's % of land",
		"Oceania's key mountain ranges",
		"Oceania's key rivers",
		"Oceania's key lakes",
		"Oceania's key forest",
		"Oceania's key desert",

		"Oceania's number of countries",
		"Oceania's population size",
		"Oceania's key countries",
		"Oceania's key cities",
		"Oceania's largest country",
		"Oceania's most populous country",

		"Oceania's language profile",
		"Oceania's micro-history",
		"Oceania's micro-political profile",
		"Oceania's micro-cultural profile"
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