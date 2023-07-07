/**
 * Super secret scripts with no purpose at all
 */

import * as websiteDictionary from '@/app/libs/database'


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


export class Game {

  /**
   * Default constructor for the game, creates the context from the canvas and the game objects
   */
  constructor() {
    // intialize the game objects
    this.wordBank = this.buildWordBank();
    this.asteroids = [];
    this.missiles = [];

    // intialize the score
    this.score = 0;
  }

  /**
   * Starts the game
   */
  startGame() {
    this.isRunning = true; // set the game to running

    // intialize and setup the canvas and the context
    this.canvas = document.getElementById('canvas');
    this.canvas.width = 3840; // set the canvas resolution to 4k
    this.canvas.height = 2160; // set the canvas resolution to 4k
    this.context = this.canvas.getContext('2d');
    this.context.fillStyle = '#FF0000'; // set the context fillStyle to red - for the missiles

    this.player = [new Player(this.canvas.width * 0.48, this.canvas.height * 0.8, this.missiles)];

    this.generateAsteroidInterval = setInterval(this.generateAsteroid.bind(this), 800) // starts generating asteroids at 1 every 800 ms
    
    this.gameLoopInterval = setInterval(() => this.gameLoop(this.context), 1000 / 60); // starts the game loop at 60fps
  }

  /** 
   * Ends the game
   */
  endGame() {
    clearInterval(this.gameLoopInterval); // stop the game loop
    clearInterval(this.generateAsteroidInterval); // stop generating asteroids
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear the canvas

    // display the game over message
    this.context.font = 'bold 100px papyrus';
    this.context.strokeStyle = '#FF0000';
    this.context.textAlign = 'center';
    this.context.strokeText('Game Over.', this.canvas.width * 0.5, this.canvas.height * 0.3); 


    // reset the game 
    this.asteroids = [];
    this.missiles = [];
    this.score = 0;
    this.cavnas = null;
    this.context = null;

    // set the game to not running
    this.isRunning = false;
  }

  /**
   * Game loop to run at 60fps
   */
  gameLoop(context) {
    // CLEAR THE CANVAS
    context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears all the previous GameObjects so they can be redrawn
  
    // PLAYER
    this.player[0].handleGameObjectUpdates(0, this.player);
  
    // ASTEROIDS
    for (let i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].handleGameObjectUpdates(i, this.asteroids);
    }
  
    // MISSILES
    for (let i = 0; i < this.missiles.length; i++) {
      this.missiles[i].handleGameObjectUpdates(i, this.missiles);
    }
  
    this.checkCollisions();
  
    // Update the score
    context.font = 'bold 100px papyrus';
    context.strokeStyle = '#FF0000';
    context.textAlign = 'center';
    context.strokeText('Score: ' + this.score, this.canvas.width * 0.5, this.canvas.height * 0.1);
  }
  

  /**
   * Checks for collisions between player and asteroids and between asteroids and missiles
   */
  checkCollisions() {

    // check collisions between player and asteroids
    for (let i = 0; i < this.asteroids.length; i++) {
      if (this.player[0].collidesWith(this.asteroids[i])) {
        this.endGame();
      }
    }

    // check collisions between missiles and asteroids
    for (let i = 0; i < this.missiles.length; i++) {
      for (let j = 0; j < this.asteroids.length; j++) {
        if (this.missiles[i].collidesWith(this.asteroids[j])) {
          this.missiles[i].destroyObject();
          this.asteroids[j].destroyObject();
          this.score += this.asteroids[j].score; // update the score
        }
      }
    }

  }

  /**
   * Randomly generates asteroids from the word bank, to be set on a loop
   */
  generateAsteroid() {
    this.asteroids.push(
      new Asteroid(
        this.wordBank[Math.floor(Math.random() * this.wordBank.length)], // gets a random word from the wordBank
        this.canvas.width,
        this.context
      )
    );
  }

  /**
   * Builds the strings to be used as words froms all of the words used on the website. Lengths of 1-3 words by random.
   */
  buildWordBank() {
    let wordBank = [];
    
    // create words from the the words in me
    this.splitSentenceIntoWords(websiteDictionary.me.name).forEach(word => {wordBank.push(word)});
    this.splitSentenceIntoWords(websiteDictionary.me.title).forEach(word => {wordBank.push(word)});
    this.splitSentenceIntoWords(websiteDictionary.me.about).forEach(word => {wordBank.push(word)});

    // create words from the the words in work
    websiteDictionary.work.forEach(workExperience => {
      this.splitSentenceIntoWords(workExperience.title).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(workExperience.location).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(workExperience.date).forEach(word => {wordBank.push(word)});
      workExperience.descriptions.forEach(description => {
        this.splitSentenceIntoWords(description).forEach(word => {wordBank.push(word)});
      })
    })

    // create words from the the words in education
    websiteDictionary.education.forEach(educationExperience => {
      this.splitSentenceIntoWords(educationExperience.title).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(educationExperience.location).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(educationExperience.date).forEach(word => {wordBank.push(word)});
      educationExperience.descriptions.forEach(description => {
        this.splitSentenceIntoWords(description).forEach(word => {wordBank.push(word)});
      })
    })

    //create words from the wrods in projects
    websiteDictionary.projects.forEach(project => {
      this.splitSentenceIntoWords(project.name).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(project.description).forEach(word => {wordBank.push(word)});
      project.techstack.forEach(technology => {
        this.splitSentenceIntoWords(technology).forEach(word => {wordBank.push(word)});
      })
    })

    return wordBank;
  }

  /**
   * Splits a string into components of random length 1-3
   * @returns {String[]} words 
   */
  splitSentenceIntoWords(sentence) {
    let sentenceSplit = sentence.split(' ');
    let newWords = []
    let index = 0;

    while(index<sentenceSplit.length) {
      let randomNum = this.randomNumOneThroughThree();
      let oneThroughThreeWords = sentenceSplit.slice(index, index+randomNum);

      // remove words that contain non letter characters
      for (let j = oneThroughThreeWords.length-1; j>=0; j--) {
        if (!oneThroughThreeWords[j].match(/[a-zA-Z]/)) {
          oneThroughThreeWords.splice(j);
        }
      }
      newWords.push(oneThroughThreeWords.join(' '));
      index+=randomNum;
    }

    // removes all empty strings from thea array and returns it
    return newWords.filter(str => str);
  }

  /**
   * Generates a random number 1-3
   * @returns {number} 
   */
  randomNumOneThroughThree() {
    return Math.floor(Math.random()*3) + 1; 
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


class GameObject {

  /**
   * 
   * @param {number} x coordinate
   * @param {number} y coordinate
   * @param {number} dx speed of the x coordinate
   * @param {number} dy speed of the y coordinate
   * @param {number} width of the object
   * @param {number} height of the object
   */
  constructor(x, y, dx, dy, width, height) {
    this.alive = true;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.width = width;
    this.height = height;

    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
  }

  /**
   * Handles all updates and checks for a GameObject for each frame
   * @param {number} index of the GameObject
   * @param {*} list containing the GameObject
   */
  handleGameObjectUpdates(index, list) {
    this.updateCoordinates(this.context);
    this.checkIfInBounds(this.canvas);
    this.checkIfAlive(index, list);
  }

  /**
   * Removes the gameObject if the alive property has been set to false
   * @param {number} index of the GameObject
   * @param {*} list containing the GameObject
   */
  checkIfAlive(index, list) {
    if (list[index].alive === false) {
      list.splice(index, 1); // remove the object from the list
      return false;
    }

    return true;
  }

  /**
   * Updates the coordinates of the GameObject based of dx and dy
   */
  updateCoordinates(context) {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    this.draw(context);
  }

  /**
   * Checks if the GameObject still resides in the canvas boundries
   * @param {*} canvas 
   * @returns {boolean} 
   */
  checkIfInBounds(canvas) {
    // check x-axis boundries
    if (this.x < 0 || (this.x + this.width) > canvas.width) {
      this.handleOutOfBounds()
      return false;
    }

    // check y-axis boundries
    if (this.y < 0 || (this.y + this.height) > canvas.height) {
      this.handleOutOfBounds()
      return false;
    }

    return true;
  }

  /**
   * Handles what happens when a GameObject goes out of bounds
   */
  handleOutOfBounds() {
    this.destroyObject();
  }

  /**
   * Sets alive property to false when the GameObject is to be destroyed
   */
  destroyObject() {
    this.alive = false;
  }

  /**
   * Check if this GameObject has a collision with another GameObject
   * @param {GameObject} gameObject object to check collision with
   */
  collidesWith(gameObject) {
    return (
      this.checkForAxisCollision(this.x, this.x + this.width, gameObject.x, gameObject.x + gameObject.width) // check for x-axis collision
      && this.checkForAxisCollision(this.y, this.y + this.height, gameObject.y, gameObject.y + gameObject.height) // check for y-axis collision
    );
  }

  /**
   * 
   * @param {number} x1 lower bound for range 1
   * @param {number} x2 upper bound for range 1
   * @param {number} y1 lower bound for range 2
   * @param {number} y2 upper bound for range 2
   * @returns 
   */
  checkForAxisCollision(x1, x2, y1, y2) {
    return (
      (x1 >= y1 && x1 <= y2) 
      || (x2 >= y1 && x2 <= y2) 
      || (y1 >= x1 && y1 <= x2)
      || (y2 >= x1 && y2 <= x2)
    );
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


class Player extends GameObject {
  
  /**
   * 
   * @param {number} x coordinate
   * @param {number} y coordinate
   */
  constructor(x, y, missiles) {
    super(x, y, 0, 0, 90, 160);
    this.playerSpeed = 20; // default speed of the player

    this.image = new Image();
    this.image.src = '/images/game/player.png';

    this.missiles = missiles;
    this.initializeEventListeners();
  }

  /**
   * Draw the player iamge onto the context once it has loaded
   * @param {*} context 
   */
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  /**
   * Initilizes the event listener for the player, listens for directional movement and for shooting missiles
   */
  initializeEventListeners() {
    document.addEventListener('keydown', (e) => {
      let keyPressed = e.code;

      // key inputs for movement right
      if (keyPressed === 'ArrowRight' || keyPressed === 'KeyD') {
        this.dx = this.playerSpeed; // update dx to the playerSpeed if the player is in bounds
      }

      // key inputs for movement left
      if (keyPressed === 'ArrowLeft' || keyPressed === 'KeyA') {
        this.dx = -this.playerSpeed; // update dy to the negative playerSpeed if the player is in bounds
      }

      // key input for shooting a missile
      if (keyPressed === 'Space') {
        this.missiles.push(new Missile(this.x + (0.5 * this.width), this.y)); // create a new missile at the tip of the player
      }
    })

    document.addEventListener('keyup', (e) => {
      let keyReleased = e.code;

      // if the player is moving right and the release a right movement key
      if ((keyReleased === 'ArrowRight' || keyReleased === 'KeyD') && this.dx === this.playerSpeed) {
        this.dx = 0; 
      }

      // if the player is moving left and the release a left movement key
      if ((keyReleased === 'ArrowLeft' || keyReleased === 'KeyA') && this.dx === -this.playerSpeed) {
        this.dx = 0; 
      }
    })
  }

  /**
   * Stops the player if they move out of bounds
   */
  handleOutOfBounds() {
    this.dx = 0;
    this.dy = 0;
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


class Asteroid extends GameObject {

  /**
   * @param {String} word 
   * @param {number} canvasWidth
   */
  constructor(word, canvasWidth, context) {
    super(0, 0, 0, 5, context.measureText(word).width, 50);
    this.word = word;
    this.canvasWidth = canvasWidth
    this.x = this.generateRandomXCoordinate();
    this.score = this.generateAsteroidScore();
  }

  /**
   * Draw the asteroid text onto the canvas
   * @param {*} context 
   */
  draw(context) {
    this.context.font = 'bold 50px papyrus';
    this.context.strokeStyle = '#FFFFFF';
    this.context.textAlign = 'start';
    context.strokeText(this.word, this.x, this.y);
  }

  /**
   * @returns {number} random x coordinate to be used for the asteroid
   */
  generateRandomXCoordinate() {
    return Math.floor(Math.random() * 0.9 * this.canvasWidth); 
  }

  /**
   * @returns {number} a score for the asteroid that has an inverse relationship with its length
   */
  generateAsteroidScore() {
    let length = this.word.split(' ').length;

    switch (length) {
      case 1: 
        return 3; // length of 1 has a score of 3
      case 2: 
        return 2; // length of 2 has a score of 2
      case 3: 
        return 1; // length of 3 has a score of 1
      default:
        return 1;
    }
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


class Missile extends GameObject {

  /**
   * 
   * @param {number} x coordinate 
   * @param {number} y coordinate
   */
  constructor(x, y) {
    super(x, y, 0, -15, 10, 30);
  }

  /**
   * Draw the missile onto the canvas
   * @param {*} context 
   */
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */



