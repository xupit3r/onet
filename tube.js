
/* 
  think of this as a cell.
  everything we build, will
  be built using this. */
const thing = (()=>({}))



/**
 * grow a tube
 * 
 * @param {string} name a nice little name for your tube 
 * @returns a buddable tube
 */

export const tube = () => {
  // thing poops out a new thing
  // this will grow into our tube
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

  return tube;
}
