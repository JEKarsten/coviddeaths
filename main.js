var PAGE_TOP = 0;
var PAGE_BOTTOM = visualViewport.height;
var PAGE_WIDTH = visualViewport.width;
var MIN_FONT_SIZE = 30;
var MAX_FONT_SIZE = 55;
var MIN_OPACITY = .70;
var MAX_OPACITY = .95;
var MIN_SPEED = 14;
var MAX_SPEED = 10;
var OPTIMIZED_PAGE_WIDTH = 1080;
var SMALL_WIDTH_STICKY_CONST = 2
var FREQUENCY = 2;
var SICKNESS_PROBABILITY = .8;
var MIN_HEALTHY_TIME = 2;
var MAX_HEALTHY_TIME = 2;

var POPULAR_NAMES = ["James",  "John",  "Robert",  "Michael",  "William",  "David",  "Richard",  "Joseph",  "Thomas",  "Charles",  "Christopher",  "Daniel",  "Matthew",  "Anthony",  "Donald",  "Mark",  "Paul",  "Steven",  "Andrew",  "Kenneth",  "Joshua",  "Kevin",  "Brian",  "George",  "Edward",  "Ronald",  "Timothy",  "Jason",  "Jeffrey",  "Ryan",  "Jacob",  "Gary",  "Nicholas",  "Eric",  "Jonathan",  "Stephen",  "Larry",  "Justin",  "Scott",  "Brandon",  "Benjamin",  "Samuel",  "Frank",  "Gregory",  "Raymond",  "Alexander",  "Patrick",  "Jack",  "Dennis",  "Jerry",  "Tyler",  "Aaron",  "Jose",  "Henry",  "Adam",  "Douglas",  "Nathan",  "Peter",  "Zachary",  "Kyle",  "Walter",  "Harold",  "Jeremy",  "Ethan",  "Carl",  "Keith",  "Roger",  "Gerald",  "Christian",  "Terry",  "Sean",  "Arthur",  "Austin",  "Noah",  "Lawrence",  "Jesse",  "Joe",  "Bryan",  "Billy",  "Jordan",  "Albert",  "Dylan",  "Bruce",  "Willie",  "Gabriel",  "Alan",  "Juan",  "Logan",  "Wayne",  "Ralph",  "Roy",  "Eugene",  "Randy",  "Vincent",  "Russell",  "Louis",  "Philip",  "Bobby",  "Johnny",  "Bradley",  "Mary",  "Patricia",  "Jennifer",  "Linda",  "Elizabeth",  "Barbara",  "Susan",  "Jessica",  "Sarah",  "Karen",  "Nancy",  "Lisa",  "Margaret",  "Betty",  "Sandra",  "Ashley",  "Dorothy",  "Kimberly",  "Emily",  "Donna",  "Michelle",  "Carol",  "Amanda",  "Melissa",  "Deborah",  "Stephanie",  "Rebecca",  "Laura",  "Sharon",  "Cynthia",  "Kathleen",  "Amy",  "Shirley",  "Angela",  "Helen",  "Anna",  "Brenda",  "Pamela",  "Nicole",  "Samantha",  "Katherine",  "Emma",  "Ruth",  "Christine",  "Catherine",  "Debra",  "Rachel",  "Carolyn",  "Janet",  "Virginia",  "Maria",  "Heather",  "Diane",  "Julie",  "Joyce",  "Victoria",  "Kelly",  "Christina",  "Lauren",  "Joan",  "Evelyn",  "Olivia",  "Judith",  "Megan",  "Cheryl",  "Martha",  "Andrea",  "Frances",  "Hannah",  "Jacqueline",  "Ann",  "Gloria",  "Jean",  "Kathryn",  "Alice",  "Teresa",  "Sara",  "Janice",  "Doris",  "Madison",  "Julia",  "Grace",  "Judy",  "Abigail",  "Marie",  "Denise",  "Beverly",  "Amber",  "Theresa",  "Marilyn",  "Danielle",  "Diana",  "Brittany",  "Natalie",  "Sophia",  "Rose",  "Isabella",  "Alexis",  "Kayla",  "Charlotte"];

/**
 * Generates name-age pairs that scroll from left to right across the screen
 * All elements are deleted from the DOM after it travels twice the screen's width (set in CSS file)
 * All controls are set via global variables
 */
function createName() {
  var name = document.createElement("div")
  var speed = randomRange(MAX_SPEED, MIN_SPEED, true);
  speed *= PAGE_WIDTH/OPTIMIZED_PAGE_WIDTH;
  if (PAGE_WIDTH < OPTIMIZED_PAGE_WIDTH) {
    speed *= SMALL_WIDTH_STICKY_CONST;
  }
  if (Math.random() < SICKNESS_PROBABILITY) {
    name.className = "sick";
  } else {
    name.className = "healthy";
  }

  name.style.top = randomRange(PAGE_TOP, PAGE_BOTTOM, false) + "px";
  name.style.fontSize = randomRange(MIN_FONT_SIZE, MAX_FONT_SIZE, false) + "px";
  name.style.color = "#000";
  name.style.opacity = randomRange(MIN_OPACITY, MAX_OPACITY, false);
  name.style.animationDuration = speed + "s";

  name.innerHTML = genName() + ", " + genAgeSick().toString();

  document.body.appendChild(name);
  setTimeout(function(){$(name).remove();}, speed*1000);
  setTimeout(createName, 1000 / FREQUENCY);
}

/**
 * Returns a random name
 * Names are taken from a list of the 200 most common names in the United States
 * 
 * @return {String} A random name
 */
function genName() {
  return POPULAR_NAMES[Math.floor(Math.random() * POPULAR_NAMES.length)];
}

/**
 * Returns a person's age
 * Ages are calculated based off of COVID-19 death rates per age range reported by the CDC as of November 11, 2020
 * 
 * @return {int} An age from 5-94
 */
function genAgeSick() {
  random = Math.random();
  age = 0;

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

/**
 * Reloads the current page
 */
function reload() {
  location.reload();
}

/**
 * Adds the current COVID total death count to the background
 * Data is gathered from the CDC's COVID-19 open database
 * Loops backwards through days starting at current date to find most recent data
 */
function currentDeathCount() {
  var url = "";
  var empty = true;
  var fullDate = new Date();
  while (empty) {
    var year = fullDate.getFullYear().toString() + "-";
    var month = (fullDate.getMonth() + 1).toString() + "-";
    if (month.length < 2) {
      month = "0" + month;
    }
    var date = fullDate.getDate().toString();
    if (date.length < 2) {
      date = "0" + date;
    }
    formattedDate = year + month + date;
    url = "https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=" + formattedDate;
    $.ajax({
      async: false,
      url: url,
      dataType: "json",
      success: function(data) {
        if (data.length == 0) {
          fullDate.setDate(fullDate.getDate()-1);
        } else {
          empty = false;
        }
      }
    });
  }

  var deathCount = 0;
  $.ajax({
    async: false,
    url: url,
    dataType: "json",
    success: function(data) {
      for (var i=0; i<data.length; i++) {
        deathCount += parseInt(data[i]["tot_death"]);
      }
    }
  });

  var name = document.createElement("div")
  name.id = "deaths";
  name.innerHTML = deathCount.toLocaleString('en');

  document.body.appendChild(name);
}