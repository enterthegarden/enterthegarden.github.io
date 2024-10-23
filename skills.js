
// Array of words to choose from
const prefix = "How do you "

const questions = ["swim in the wild?", 
"climb in the wild?",
"make & maintain a fire in the wild?",
"find & purify water in the wild?",
"build a simple shelter in the wild?",
"find edible plants in the wild?",
"set simple traps in the wild?",
"prepare foraged plants and caught animals in the wild?",
"avoid hazardous plants & animals in nature?",
"navigate in nature?",
"signal for help in nature?",
"make basic tools from natural materials in nature?",



"compost in farming?",
"fertilise in farming?",
"use companion planting?",
"sow seeds?",
"transplant in farming?",

"irrigate sustainably when farming?",
"control weeds and pests naturally?",
"rotate crops?",
"harvest crops timely?",
"maintain and repair basic farming tools?",



"find your nutritional needs?",
"find the foods you're allergic to?",
"read food labels?",
"plan a nutritious meal cycle (with local & seasonal foods)?",
"prepare nutritious meals with minimal ingredients?",

"store & handle food?",
"minimise food waste?",
"fast from sunrise to sunset for a month?",
"recognise & respond to signs of dehydration?",
"recognise & respond to signs of malnutrition?",


"save someone choking?",
"apply pressure to a wound?",
"carry out CPR?",
"call an ambulance effectively?",
"put someone in the recovery position?",

"treat the most common illnesses?",
"treat an allergic reaction, heat exhaustion, and hypothermia?",
"provide basic care for burns?",
"treat minor cuts?",
"stabilise fractured limbs?",



"wash your hands?",
"brush your teeth?",
"care for your nails?",
"care for your skin?",
"keep gendered hygiene?",



];


const conditions = ["Answer as though you're a walking encyclopedia.", 
"Answer as if the entire world were watching and listening to you.", 
"Answer in the style of a dusty academic book.", 
"Answer in an incredibly formal and professional style.", 
"Answer with quotes and attributions (according to...).", 
"Answer as though you were delivering a university lecture.", 
"Answer as if you and your listener were excessively, effusive enthusiasts.", 
"Answer as if in a high-level discourse with experts.", 
"Answer with a rich, literary flare.", 
"Answer in essay form.", 
"Answer with an image (a chart or some other visual).", 
"Answer offering balanced information to a divided audience.", 
"Answer from two very distinct perspectives.", 
"Answer while making it very relevant to the present.", 
"Answer in a detached, impersonal fashion.", 
"Answer with several follow-up questions.", 
"Answer as if in a media interview.", 
"Answer using metaphor, simile, or personification.", 
"Answer by telling a short story.", 
"Answer as if you were an alien.", 
"Answer as though asked by a five-year-old.", 
"Answer as though asked by a ninety-year-old.", 
"Answer in a poetic style.", 
"Answer using the rarest, longest, and weirdest words you can.", 
"Answer as if trying to please the most argumentative person ever.", 
"Answer as if you were the smartest being in the Universe.", 
"Answer in the most meaningful five-word sentence you can.", 
"Answer as if you were a well-meaning fool.", 
"Answer as if you were on a popular television show.", 
"Answer as a fictional character like Sherlock Holmes.", 
"Answer as a historical figure like Albert Einstein.", 
"Answer as if you always speak in riddles.", 
"Answer using as many one syllable words as you can.", 
"Answer like a jargon-heavy expert.", 
"Answer in one minute.", 
"Answer with levity.", 
"Answer as if you were writing a journal to yourself.", 
"Answer as if it were the most obvious question ever.", 
"Answer as if it were the hardest question you've ever been asked.", 
"Answer as if you were trying to explain to an ancestral human."];

// Function to change the text
function changeText() {
    // Get the span element (assuming it has an id of 'textSpan')
    const questionSpan = document.getElementById('question');
    const conditionSpan = document.getElementById('condition');
    
    // Choose a random word from the array
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    
    // Set the span's inner text to the random word
    question.innerText = prefix + randomQuestion;
    condition.innerText = randomCondition;
}

// Call the function when the page loads
window.onload = changeText;

// Optional: You can also set up a button to trigger the change
// Uncomment the next line if you want to use a button with id 'changeButton'
// document.getElementById('changeButton').addEventListener('click', changeText);