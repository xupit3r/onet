const tube = require('./tube.js')

/**
 * a tree is basically one or more tubes
 * in a trenchcoat. everything follows from 
 * there.
 * 
 * @returns a buddable tree 
 * 
 */
export const tree = () => {
  const tubes = [];

  const bud = () => {
    tubes = [
      ...tubes,
      tube()
    ];
  }

  // a tree is just a tube
  const tree = tube({
    bud
  });

  return tree;
}