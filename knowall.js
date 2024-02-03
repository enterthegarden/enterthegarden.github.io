
function Levenshtein(questionCount, isRandom) {
	
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
	    "the key concerns for technology",

	    "art's definition",
	    "art's main types",
	    "the earliest evidence of art",
	    "the key purposes of art",
	    "the steps of art creation",
	    "the purpose of museums regarding art",
	    "the key concerns for art",

	    "language's definition",
	    "language's age & origins",
	    "the number of extant languages",
	    "the extinction rate of languages",
	    "the number of written languages",
	    "the unique features of human language",
	    "the five most spoken languages",
	    "the key language evolution mechanisms",
	    "the number of language families",
	    "the key language learning period",
	    "the key concerns for languages",

	    "the definition of a human",
	    "the time & place of origin of humans",
	    "the lifestyle of humans before farming",
	    "the date of development of farming",
	    "the current global population",
	    "how many humans have ever been born",
	    "the distinguishing features of humans from other great apes",
	    "the main social groups that humans form",
	    "the genetic similarity of a random pair of humans",
	    "the unique features of the human mind",
	    "the year humans first visited the Moon"
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