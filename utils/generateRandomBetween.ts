export const generateRandomBetween = (min: number, max: number, exclude: number):number =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random()* (max-min)) + min;
    if (randomNumber == exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return randomNumber;
}