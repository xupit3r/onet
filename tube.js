const thing = require('./thing.js')

/**
 * a tube is like a thing, that
 * can ummmm, like strrrretch, 
 * i guuuuuuuuuuuuuuuuuuuuuess.
 * 
 * @returns a stretchable tube
 */

export const tube = () => {
  const things = [];

  const stretch = () => {
    things = [
      ...things,
      thing()
    ];
  }

  // a tube is just a stretchy 
  // thing
  const tube = thing({
    stretch
  });

  return tube;
}
