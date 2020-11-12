var MIN_FONT_SIZE = 34;
var MAX_FONT_SIZE = 55;
var MIN_SPEED = 10;
var MAX_SPEED = 7;
var PAGE_TOP = 0;
var PAGE_BOTTOM = visualViewport.height;
var SICKNESS_PROBABILITY = .8;
var MIN_HEALTHY_TIME = 2;
var MAX_HEALTHY_TIME = 2;

var POPULAR_NAMES = ["James",  "John",  "Robert",  "Michael",  "William",  "David",  "Richard",  "Joseph",  "Thomas",  "Charles",  "Christopher",  "Daniel",  "Matthew",  "Anthony",  "Donald",  "Mark",  "Paul",  "Steven",  "Andrew",  "Kenneth",  "Joshua",  "Kevin",  "Brian",  "George",  "Edward",  "Ronald",  "Timothy",  "Jason",  "Jeffrey",  "Ryan",  "Jacob",  "Gary",  "Nicholas",  "Eric",  "Jonathan",  "Stephen",  "Larry",  "Justin",  "Scott",  "Brandon",  "Benjamin",  "Samuel",  "Frank",  "Gregory",  "Raymond",  "Alexander",  "Patrick",  "Jack",  "Dennis",  "Jerry",  "Tyler",  "Aaron",  "Jose",  "Henry",  "Adam",  "Douglas",  "Nathan",  "Peter",  "Zachary",  "Kyle",  "Walter",  "Harold",  "Jeremy",  "Ethan",  "Carl",  "Keith",  "Roger",  "Gerald",  "Christian",  "Terry",  "Sean",  "Arthur",  "Austin",  "Noah",  "Lawrence",  "Jesse",  "Joe",  "Bryan",  "Billy",  "Jordan",  "Albert",  "Dylan",  "Bruce",  "Willie",  "Gabriel",  "Alan",  "Juan",  "Logan",  "Wayne",  "Ralph",  "Roy",  "Eugene",  "Randy",  "Vincent",  "Russell",  "Louis",  "Philip",  "Bobby",  "Johnny",  "Bradley",  "Mary",  "Patricia",  "Jennifer",  "Linda",  "Elizabeth",  "Barbara",  "Susan",  "Jessica",  "Sarah",  "Karen",  "Nancy",  "Lisa",  "Margaret",  "Betty",  "Sandra",  "Ashley",  "Dorothy",  "Kimberly",  "Emily",  "Donna",  "Michelle",  "Carol",  "Amanda",  "Melissa",  "Deborah",  "Stephanie",  "Rebecca",  "Laura",  "Sharon",  "Cynthia",  "Kathleen",  "Amy",  "Shirley",  "Angela",  "Helen",  "Anna",  "Brenda",  "Pamela",  "Nicole",  "Samantha",  "Katherine",  "Emma",  "Ruth",  "Christine",  "Catherine",  "Debra",  "Rachel",  "Carolyn",  "Janet",  "Virginia",  "Maria",  "Heather",  "Diane",  "Julie",  "Joyce",  "Victoria",  "Kelly",  "Christina",  "Lauren",  "Joan",  "Evelyn",  "Olivia",  "Judith",  "Megan",  "Cheryl",  "Martha",  "Andrea",  "Frances",  "Hannah",  "Jacqueline",  "Ann",  "Gloria",  "Jean",  "Kathryn",  "Alice",  "Teresa",  "Sara",  "Janice",  "Doris",  "Madison",  "Julia",  "Grace",  "Judy",  "Abigail",  "Marie",  "Denise",  "Beverly",  "Amber",  "Theresa",  "Marilyn",  "Danielle",  "Diana",  "Brittany",  "Natalie",  "Sophia",  "Rose",  "Isabella",  "Alexis",  "Kayla",  "Charlotte"];

document.ontouchmove = function(event){
  event.preventDefault();
}



function createName() {
  var name = document.createElement("div")
  var speed = randomRange(MAX_SPEED, MIN_SPEED, true);

  if (Math.random() < SICKNESS_PROBABILITY) {
    name.className = "sick";
  }

  name.style.top = randomRange(PAGE_TOP, PAGE_BOTTOM, false) + "px";
  name.style.fontSize = randomRange(MIN_FONT_SIZE, MAX_FONT_SIZE, false) + "px";
  name.style.color = "#000";
  name.style.animationDuration = speed + "s";

  name.innerHTML = genName() + ", " + genAgeSick().toString();

  document.body.appendChild(name);
  setTimeout(function(){$(name).remove();}, speed*1000);
  setTimeout(createName, 1000);
}

/**
 * Returns a random name
 * Names are taken from ___
 * 
 * @return {String} A random name
 */
function genName() {
  return POPULAR_NAMES[Math.floor(Math.random() * POPULAR_NAMES.length)];
}

/**
 * Returns a person's age
 * Ages are calculated based off of COVID-19 death rates per age range
 * reported by the CDC as of November 11, 2020
 * 
 * @return {int} An age from 5-94
 */
function genAgeSick() {
  random = Math.random();
  age = 0;
  console.log(random);

  if (random <  0.000363) {age = 5;}
  else if (random < 0.002204) {age = 15;}
  else if (random < 0.009920) {age = 25;}
  else if (random < 0.029855) {age = 35;}
  else if (random < 0.082655) {age = 45;}
  else if (random < 0.209498) {age = 55;}
  else if (random < 0.425686) {age = 65;}
  else if (random < 0.691923) {age = 75;}
  else {age = 85;}

  age += Math.floor(Math.random() * 10);
  return age;
}

/**
 * Returns a random number within range
 * 
 * @param {int} min The minimum integer of range, inclusive
 * @param {int} max The maximum integer of range, not inclusive
 * @param {boolean} round A bool of whether to use the floor function
 * @return {int} An integer betwen min and max
 */
function randomRange(min, max, round) {
  if (round) {
    return min + Math.floor(Math.random() * (max-min));
  } else {
    return min + (Math.random() * (max-min));
  }
}