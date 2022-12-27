/**
 * Super secret scripts with no purpose at all
 */

import * as websiteDictionary from '../assets/information';


/**
 * Starts the game
 */
export function startGame() {
  buildAsteroids().forEach(asteroid => {console.log(asteroid)})
}

/**
 * Builds the strings to be used as asteroids froms all of the words used on the website. Lengths of 1-3 words by random.
 */
function buildAsteroids() {
  let asteroids = [];
  
  // create asteroids from the the words in me
  splitSentenceIntoAsteroids(websiteDictionary.me.name).forEach(asteroid => {asteroids.push(asteroid)});
  splitSentenceIntoAsteroids(websiteDictionary.me.title).forEach(asteroid => {asteroids.push(asteroid)});
  splitSentenceIntoAsteroids(websiteDictionary.me.about).forEach(asteroid => {asteroids.push(asteroid)});

  // create asteroids from the the words in work
  websiteDictionary.work.forEach(workExperience => {
    splitSentenceIntoAsteroids(workExperience.title).forEach(asteroid => {asteroids.push(asteroid)});
    splitSentenceIntoAsteroids(workExperience.location).forEach(asteroid => {asteroids.push(asteroid)});
    splitSentenceIntoAsteroids(workExperience.date).forEach(asteroid => {asteroids.push(asteroid)});
    workExperience.descriptions.forEach(description => {
      splitSentenceIntoAsteroids(description).forEach(asteroid => {asteroids.push(asteroid)});
    })
  })

  // create asteroids from the the words in education
  websiteDictionary.education.forEach(educationExperience => {
    splitSentenceIntoAsteroids(educationExperience.title).forEach(asteroid => {asteroids.push(asteroid)});
    splitSentenceIntoAsteroids(educationExperience.location).forEach(asteroid => {asteroids.push(asteroid)});
    splitSentenceIntoAsteroids(educationExperience.date).forEach(asteroid => {asteroids.push(asteroid)});
    educationExperience.descriptions.forEach(description => {
      splitSentenceIntoAsteroids(description).forEach(asteroid => {asteroids.push(asteroid)});
    })
  })

  //create asteroids from the wrods in projects
  websiteDictionary.projects.forEach(project => {
    splitSentenceIntoAsteroids(project.name).forEach(asteroid => {asteroids.push(asteroid)});
    splitSentenceIntoAsteroids(project.description).forEach(asteroid => {asteroids.push(asteroid)});
    project.techstack.forEach(technology => {
      splitSentenceIntoAsteroids(technology).forEach(asteroid => {asteroids.push(asteroid)});
    })
  })

  return asteroids;
}

/**
 * Splits a string into components of random length 1-3
 * @returns {String[]} asteroids 
 */
function splitSentenceIntoAsteroids(sentence) {
  let sentenceSplit = sentence.split(' ');
  let newAsteroids = []
  let index = 0;

  while(index<sentenceSplit.length) {
    let randomNum = randomNumOneThroughThree();
    let oneThroughThreeWords = sentenceSplit.slice(index, index+randomNum);

    // remove words that contain non letter characters
    for (let j = oneThroughThreeWords.length-1; j>=0; j--) {
      if (!oneThroughThreeWords[j].match(/[a-zA-Z]/)) {
        oneThroughThreeWords.splice(j);
      }
    }
    newAsteroids.push(oneThroughThreeWords.join(' '));
    index+=randomNum;
  }

  // removes all empty strings from thea array and returns it
  return newAsteroids.filter(str => str);
}

/**
 * Generates a random number 1-3
 * @returns {number} 
 */
function randomNumOneThroughThree() {
  return Math.floor(Math.random()*3) + 1; 
}