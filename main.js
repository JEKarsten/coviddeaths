var POPULAR_NAMES = ["James",  "John",  "Robert",  "Michael",  "William",  "David",  "Richard",  "Joseph",  "Thomas",  "Charles",  "Christopher",  "Daniel",  "Matthew",  "Anthony",  "Donald",  "Mark",  "Paul",  "Steven",  "Andrew",  "Kenneth",  "Joshua",  "Kevin",  "Brian",  "George",  "Edward",  "Ronald",  "Timothy",  "Jason",  "Jeffrey",  "Ryan",  "Jacob",  "Gary",  "Nicholas",  "Eric",  "Jonathan",  "Stephen",  "Larry",  "Justin",  "Scott",  "Brandon",  "Benjamin",  "Samuel",  "Frank",  "Gregory",  "Raymond",  "Alexander",  "Patrick",  "Jack",  "Dennis",  "Jerry",  "Tyler",  "Aaron",  "Jose",  "Henry",  "Adam",  "Douglas",  "Nathan",  "Peter",  "Zachary",  "Kyle",  "Walter",  "Harold",  "Jeremy",  "Ethan",  "Carl",  "Keith",  "Roger",  "Gerald",  "Christian",  "Terry",  "Sean",  "Arthur",  "Austin",  "Noah",  "Lawrence",  "Jesse",  "Joe",  "Bryan",  "Billy",  "Jordan",  "Albert",  "Dylan",  "Bruce",  "Willie",  "Gabriel",  "Alan",  "Juan",  "Logan",  "Wayne",  "Ralph",  "Roy",  "Eugene",  "Randy",  "Vincent",  "Russell",  "Louis",  "Philip",  "Bobby",  "Johnny",  "Bradley",  "Mary",  "Patricia",  "Jennifer",  "Linda",  "Elizabeth",  "Barbara",  "Susan",  "Jessica",  "Sarah",  "Karen",  "Nancy",  "Lisa",  "Margaret",  "Betty",  "Sandra",  "Ashley",  "Dorothy",  "Kimberly",  "Emily",  "Donna",  "Michelle",  "Carol",  "Amanda",  "Melissa",  "Deborah",  "Stephanie",  "Rebecca",  "Laura",  "Sharon",  "Cynthia",  "Kathleen",  "Amy",  "Shirley",  "Angela",  "Helen",  "Anna",  "Brenda",  "Pamela",  "Nicole",  "Samantha",  "Katherine",  "Emma",  "Ruth",  "Christine",  "Catherine",  "Debra",  "Rachel",  "Carolyn",  "Janet",  "Virginia",  "Maria",  "Heather",  "Diane",  "Julie",  "Joyce",  "Victoria",  "Kelly",  "Christina",  "Lauren",  "Joan",  "Evelyn",  "Olivia",  "Judith",  "Megan",  "Cheryl",  "Martha",  "Andrea",  "Frances",  "Hannah",  "Jacqueline",  "Ann",  "Gloria",  "Jean",  "Kathryn",  "Alice",  "Teresa",  "Sara",  "Janice",  "Doris",  "Madison",  "Julia",  "Grace",  "Judy",  "Abigail",  "Marie",  "Denise",  "Beverly",  "Amber",  "Theresa",  "Marilyn",  "Danielle",  "Diana",  "Brittany",  "Natalie",  "Sophia",  "Rose",  "Isabella",  "Alexis",  "Kayla",  "Charlotte"];

function generateName() {
  var name = document.createElement("div")
  name.className = "new";
  name.innerHTML = getRandomName() + ", " + getRandomAge().toString();
  document.body.appendChild(name);
  setTimeout(function(){$(name).remove();}, 5000);
  setTimeout(generateName, 1000);
}

/**
 * Returns a random name
 * Names are taken from ___
 * 
 * @return {String} A random name
 */
function getRandomName() {
  return POPULAR_NAMES[Math.floor(Math.random() * POPULAR_NAMES.length)];
}

/**
 * Returns a person's age
 * Ages are calculated based off of COVID-19 death rates per age range
 * reported by the CDC as of November 11, 2020
 * 
 * @return {int} An age from 5-94
 */
function getRandomAge() {
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

/* 
var context;
var text = ""; */

/* $(function test() {
  context = document.getElementById("cvs").getContext("2d");
  setInterval("animate()", 30);

  textXpos = 200;
  text = "Test";
  setTimeout(test, 2000)
}); */

/* function animate() {
  topBound = 0;
  bottomBound = screen.height;
  leftBound = 0;
  rightBound = screen.width;

  // Clear screen
  context.clearRect(0, 0, rightBound, bottomBound);
  context.globalAlpha = 1;
  context.fillStyle = '#000';
  //context.fillRect(0, 0, rightBound, bottomBound);

  var metrics = context.measureText(text);
  var textWidth = metrics.width;

  if (textXpos < 10) {
    textXpos = 200;
  } else {
    textXpos -= 1;
  }

  context.font = '20px _sans';
  context.fillStyle = '#FF0000';
  context.textBaseline = 'top';
  context.fillText( text, textXpos, 100);    
} */