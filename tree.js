const tube = require('./tube.js')

/**
 * a tree is basically one or more tubes
 * in a trenchcoat. everything follows from 
 * there.
 * 
 * @returns a splitable tree 
 * 
 */
export const tree = () => {
  const tubes = [];
  const seed = () => Math.random() * 100
  const timeToSplit = () => 90

  const split = () => {
    if (seed() > timeToSplit()) {
      // a split is just taking the 
      // array of tubes and adding 
      // sibling
      tubes = [
        tubes,
        tube()
      ];
    }
  }

  // a tree is just a tube
  const tree = tube({
    split
  });

  return tree;
}
