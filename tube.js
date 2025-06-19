const thing = require('./thing.js')

/**
 * a tube is like a thing, that
 * can ummmm, like grow, i guess.
 * 
 * @returns a growable tube
 */

export const tube = () => {
  // a tube is just a thing
  const tube = thing({
    grow 
  });

  // that grows
  tube.grow = () => {
    // what does this do?
  }

  return tube;
}
