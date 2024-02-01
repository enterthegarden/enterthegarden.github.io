
function Levenshtein(wordcount, linesize) {
	
	const myDictionary = [

		"the Universe's definition",
		"the Universe's (scientific) age & origin",
	    "the Universe's size (e.g. width)",
	    "the Universe's supposed cause of expansion",
	    "the pre-scientific models of the Universe",
	    "the Universe's geometry under current models",
	    "the dominant physics model of the Universe",
	    "the mass/energy composition of the Universe",
	    "the origin of first stars",
	    "the number of stars in the Milky Way",
	    "the number of galaxies in Observable Universe",
	    "the Universe's (scientifically) predicted end",

		"Earth's definition",
	    "Earth's (scientific) age & origin",
	    "Earth's shape",
	    "Earth's approximate equatorial width",
	    "Earth's general structure",
	    "Earth's atmospheric composition",
	    "the percent of Earth's surface covered by water",
	    "the origins of seismic activity",
	    "the origins of magnetosphere",
	    "the role of magnetosphere",
	    "the Moon's source of visibility",
	    "the Earth's axial tilt",
	    "the cause of the seasonal cycle",
	    "the cause of the day-night cycle",

	    "life's definition",
	    "the age & origin of life (scientifically)",
	    "the basic units of life",
	    "the number of recorded species",
	    "the origins of diversity",
	    "DNA's location & role",
	    "the elemental base of life",
	    "the percent of all species (ever) now extinct",
	    "where extraterrestrial life is sought",

	    "science's definition",
	    "science's branches",
	    "the date of the Scientific Revolution",
	    "the steps of the scientific method",
	    "relativity theory summed in a short phrase",
	    "atomic theory summed in a short phrase",
	    "evolutionary theory summed in a short phrase",
	    "the role of mathematical modelling",
	    "the key concerns for science",

	    "technology's definition",
	    "technology's main types",
	    "the origin of fire control",
	    "the role of fire control",
	    "the origin of farming",
	    "the role of farming",
	    "the origin of writing",
	    "the role of writing",
	    "the date of Industrial Revolution",
	    "the Industrial Revolution summed in a short phrase",
	    "the key emerging technologies",
	    "the key concerns for technology"

	];

	let dictionaryLength = myDictionary.length;
	let output = "";

	if (wordcount < dictionaryLength) {
		let start = getRndInteger(0, dictionaryLength - wordcount);

		for (let i = 0; i < wordcount; i++) {
			if ((i + 1) % linesize == 0) {
				//output = output.concat("<a href=\"");
				//output = output.concat("https://en.wiktionary.org/wiki/");
				output = output.concat(myDictionary[start + i]);
				//output = output.concat("#English\" target=\"blank\">");

				//output = output.concat(myDictionary[start + i]);
				//output = output.concat("</a>");

				output = output.concat(" ");
				output = output.concat("<br>");
			} else {
				//output = output.concat("<a href=\"");
				//output = output.concat("https://en.wiktionary.org/wiki/");
				output = output.concat(myDictionary[start + i]);
				//output = output.concat("#English\" target=\"blank\">");

				//output = output.concat(myDictionary[start + i]);
				//output = output.concat("</a>");

				output = output.concat(" ");
			}
			if (((i+1) % 1) == 0) {
				output = output.concat("<br>");
			}
		}
	}

	return output;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}