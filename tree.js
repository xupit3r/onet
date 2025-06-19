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
  // a tree is just a tube
  const tree = tube();

  // that buds
  const buds = [];
  tree.bud = () => {
    // what does this do?
  }

  return tree;
}