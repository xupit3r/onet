/**
 * make a network, any network
 * 
 * @param {string} name a nice little name for your network 
 * @returns a network
 */

export const onet = (networkName) => {
  let network = this
  let neighbors = [];

  network.add = function* (name) {
    let node = this;

    node.version = 0
    node.id = () => `${node.name}.${node.version})`

    neighbors = [...neighbors, network.add(name)];
    version++

    while (true) {
      yield network
    }
  }

  network.identifier = () => `${networkName}`

  return network;
}
