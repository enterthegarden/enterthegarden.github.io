
function Levenshtein(wordcount, linesize) {
	
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
		"Africa's cultural profile"
	];

	let dictionaryLength = myDictionary.length;
	let output = "";

	if (wordcount < dictionaryLength) {
		let start = getRndInteger(0, dictionaryLength - wordcount);

		for (let i = 0; i < wordcount; i++) {
			if ((i + 1) % linesize == 0) {
				output = output.concat("<a href=\"");
				output = output.concat("https://en.wiktionary.org/wiki/");
				output = output.concat(myDictionary[start + i]);
				output = output.concat("#English\" target=\"blank\">");

				output = output.concat(myDictionary[start + i]);
				output = output.concat("</a>");

				output = output.concat(" ");
				output = output.concat("<br>");
			} else {
				output = output.concat("<a href=\"");
				output = output.concat("https://en.wiktionary.org/wiki/");
				output = output.concat(myDictionary[start + i]);
				output = output.concat("#English\" target=\"blank\">");

				output = output.concat(myDictionary[start + i]);
				output = output.concat("</a>");

				output = output.concat(" ");
			}
		}
	}

	return output;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}