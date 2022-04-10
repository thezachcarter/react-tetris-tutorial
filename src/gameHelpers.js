export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;


//function makes first array from height, then from each position in height array, 
//makes empty array based on width, forming a grid (more or less)
export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
         new Array(STAGE_WIDTH).fill([0, 'clear'])
         )


console.log(createStage);

export default createStage;