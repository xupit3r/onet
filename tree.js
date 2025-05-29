
/* 
  think of this as a cell.
  everything we build, will
  be built using this. */
const thing = (()=>({}))



/**
 * grow a tree
 * 
 * @param {string} name a nice little name for your tree 
 * @returns a buddable tree
 */

export const tree = () => {
  // thing poops out a new thing
  // this will grow into our tree
  const me = thing()

  // won't you be my neighbor? my bud? 
  // then, your neighbors can be my buds!
  // maybe?!?!? nah, that is how it works.
  const buds = []

  // a new bud pops
  me.bud = function* () {
    buds = [
      ...buds, 
      thing({})
    ];

    while (true) {
      yield me
    }
  }

  return tree;
}
