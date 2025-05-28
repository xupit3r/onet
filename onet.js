
/* 
  think of this as a cell.
  everything we build, will
  be built using this. */
const thing = (()=>({}))



/**
 * make a network, any network
 * 
 * @param {string} name a nice little name for your network 
 * @returns a network
 */

export const onet = (networkName) => {
  // thing poops out a new thing
  // this will grow into our network
  const network = thing({
    version: 0
  })

  // won't you be my neighbor? 
  // then, your neighbors can be my friends!
  // maybe?!?!?
  const neighbors = []

  // a new neighbor can move in
  network.add = function* (name) {
    const id = () => `${this.name}.${this.version})`

    neighbors = [
      ...neighbors, 
      network.add(
        thing({id, name})
      )
    ];
    network.version++

    while (true) {
      yield network
    }
  }

  // show the current network identifier
  network.identifier = () => `${networkName}`

  return network;
}
