import Station from './Station'
import Connection from './Connection'
import LinkedList, { ListNode } from './LinkedList'

export default class Subway {
  private _network: Map<Station, ListNode<Station>> // TODO update
  private _stations: LinkedList<Station>
  private _connections: LinkedList<Connection>

  constructor() {
    this._network = new Map()
    this._stations = new LinkedList<Station>()
    this._connections = new LinkedList<Connection>()
  }

  addConnection(
    stationOneName: string,
    stationTwoName: string,
    lineName: string
  ): void {
    if (this.hasStation(stationOneName) && this.hasStation(stationTwoName)) {
      let stationOne = new Station(stationOneName)
      let stationTwo = new Station(stationTwoName)
      let connection = new Connection(stationOne, stationTwo, lineName)
      this._connections.add(connection)
      this._addToNetwork(stationOne, stationTwo)
    } else {
      throw Error('Invalid Connection')
    }
  }

  addStation(name: string): void {
    if (this.hasStation(name)) return

    this._stations.add(new Station(name))
  }

  getStations(): Station[] {
    return this._stations.toArray()
  }

  getConnections(): Connection[] {
    return this._connections.toArray()
  }

  // get Directions(starting: string, destination: string): Connection[] {}

  private hasStation(name: string): boolean {
    if (this._stations.size() === 0) return false

    let stationNames = this._stations
      .toArray()
      .map((station) => station.getName())

    return stationNames.includes(name)
  }
}
