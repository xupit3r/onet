/**
 * make a network, any network
 * 
 * @param {string} name a nice little name for your network 
 * @returns a network
 */
export const onet = name => {
  let network = this;
  let neighbors = [];

  return function* (thing) {
    let version = 0
    let bind = () => {
      neighbors = [...neighbors, thing];
      thing.add(network);
    }

    while (true) {
      version++
      bind(thing)

      yield {
        name,
        version,
        neighbors,
        bind
      }
    }
  }
}
