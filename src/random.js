export const getRandomNumber = (min,max) => {
  // TODO implement to return random integer between 1 and 6
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
};
