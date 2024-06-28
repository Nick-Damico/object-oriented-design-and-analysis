import Station from './Station'
import Connection from './Connection'

class LinkedListNode<T> {
  public value?: T
  public next: LinkedListNode<T> | null = null
  public prev: LinkedListNode<T> | null = null

  constructor(value?: T | undefined) {
    this.value = value
  }
}

export default class Subway {
  private _stations: LinkedListNode<Station>
  private _stationsHead: LinkedListNode<Station>
  private _stationsTail: LinkedListNode<Station>
  private _stationsCount: number

  private _connections: LinkedListNode<Connection>
  private _connectionsHead: LinkedListNode<Connection>
  private _connectionsTail: LinkedListNode<Connection>
  private _connectionsCount: number

  constructor() {
    this._initStations()
    this._initConnections()
  }

  private _initStations(): void {
    let dummyNode = new LinkedListNode<Station>()
    this._stations = dummyNode
    this._stationsHead = dummyNode
    this._stationsTail = dummyNode
    this._stationsCount = 0
  }

  private _initConnections(): void {
    let dummyNode = {
      value: undefined,
      next: undefined,
      prev: undefined
    } as ConnectionNode
    this._connections = dummyNode
    this._connectionsCount = 0
  }

  addStation(stationName: string): void {
    if (this.hasStation(stationName)) return

    let curNode = this._stations
    while (curNode.next) {
      curNode = curNode.next
    }

    let newStation = new Station(stationName)
    curNode.next = {
      value: newStation,
      prev: curNode
    } as StationNode
    ++this._stationsCount
  }

  addConnection(connection: Connection): void {}

  setupConnection(
    lineName: string,
    stationOneName: string,
    stationTwoName: string
  ) {
    if (this.hasStation(stationOneName) && this.hasStation(stationTwoName)) {
      let stationOne = new Station(stationOneName)
      let stationTwo = new Station(stationTwoName)

      let connection = new Connection(stationOne, stationTwo, lineName)
      this.addConnection(connection)
    } else {
      throw Error('Invalid Connection')
    }
  }

  hasStation(stationName: string): boolean {
    if (this._stationsCount === 0) return false

    let curNode = this._stations

    while (curNode.next) {
      curNode = curNode.next

      if (curNode.value?.getName() === stationName) {
        return true
      }
    }

    return false
  }
}
