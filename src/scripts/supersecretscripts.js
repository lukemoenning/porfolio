/**
 * Super secret scripts with no purpose at all
 */

import * as websiteDictionary from '../assets/information';


/**
 * Starts the game
 */
export function startGame() {
  buildMeteors().forEach(meteor => {console.log(meteor)})
}

/**
 * Builds the strings to be used as meteors froms all of the words used on the website. Lengths of 1-3 words by random.
 */
function buildMeteors() {
  let meteors = [];
  
  // create meteors from the the words in me
  splitSentenceIntoMeteors(websiteDictionary.me.name).forEach(meteor => {meteors.push(meteor)});
  splitSentenceIntoMeteors(websiteDictionary.me.title).forEach(meteor => {meteors.push(meteor)});
  splitSentenceIntoMeteors(websiteDictionary.me.about).forEach(meteor => {meteors.push(meteor)});

  // create meteors from the the words in work
  websiteDictionary.work.forEach(workExperience => {
    splitSentenceIntoMeteors(workExperience.title).forEach(meteor => {meteors.push(meteor)});
    splitSentenceIntoMeteors(workExperience.location).forEach(meteor => {meteors.push(meteor)});
    splitSentenceIntoMeteors(workExperience.date).forEach(meteor => {meteors.push(meteor)});
    workExperience.descriptions.forEach(description => {
      splitSentenceIntoMeteors(description).forEach(meteor => {meteors.push(meteor)});
    })
  })

  // create meteors from the the words in education
  websiteDictionary.education.forEach(educationExperience => {
    splitSentenceIntoMeteors(educationExperience.title).forEach(meteor => {meteors.push(meteor)});
    splitSentenceIntoMeteors(educationExperience.location).forEach(meteor => {meteors.push(meteor)});
    splitSentenceIntoMeteors(educationExperience.date).forEach(meteor => {meteors.push(meteor)});
    educationExperience.descriptions.forEach(description => {
      splitSentenceIntoMeteors(description).forEach(meteor => {meteors.push(meteor)});
    })
  })

  //create meteors from the wrods in projects
  websiteDictionary.projects.forEach(project => {
    splitSentenceIntoMeteors(project.name).forEach(meteor => {meteors.push(meteor)});
    splitSentenceIntoMeteors(project.description).forEach(meteor => {meteors.push(meteor)});
    project.techstack.forEach(technology => {
      splitSentenceIntoMeteors(technology).forEach(meteor => {meteors.push(meteor)});
    })
  })

  return meteors;
}

/**
 * Splits a string into components of random length 1-3
 * @returns {String[]} meteors 
 */
function splitSentenceIntoMeteors(sentence) {
  let sentenceSplit = sentence.split(' ');
  let newMeteors = []
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
    newMeteors.push(oneThroughThreeWords.join(' '));
    index+=randomNum;
  }

  // removes all empty strings from thea array and returns it
  return newMeteors.filter(str => str);
}

/**
 * Generates a random number 1-3
 * @returns {number} 
 */
function randomNumOneThroughThree() {
  return Math.floor(Math.random()*3) + 1; 
}