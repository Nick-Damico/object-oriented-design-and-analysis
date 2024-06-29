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
    let stationNode = new LinkedListNode<Station>()
    this._stations = stationNode
    this._stationsHead = stationNode
    this._stationsTail = stationNode
    this._stationsCount = 0

    let connectionNode = new LinkedListNode<Connection>()
    this._connections = connectionNode
    this._connectionsHead = connectionNode
    this._connectionsTail = connectionNode
    this._connectionsCount = 0
  }

  buildConnection(
    stationOneName: string,
    stationTwoName: string,
    lineName: string
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

  addStation(name: string): void {
    if (this.hasStation(name)) return

    let curTail = this._stationsTail
    let newStation = new Station(name)
    let newNode = new LinkedListNode(newStation)

    curTail.next = newNode
    newNode.prev = curTail
    this._stationsTail = newNode
    ++this._stationsCount
  }

  getStations(): Station[] {
    let stations: Station[] = []

    let curNode = this._stationsHead.next
    while (curNode) {
      if (curNode.value) {
        stations.push(curNode.value)
      }
      curNode = curNode.next
    }

    return stations
  }

  private addConnection(connection: Connection): void {
    if (this.hasConnection(connection.getName())) return

    let curTail = this._connectionsTail
    let newNode = new LinkedListNode(connection)

    curTail.next = newNode
    newNode.prev = curTail
    this._connectionsTail = newNode
    ++this._connectionsCount
  }

  private hasConnection(name: string): boolean {
    if (this._connectionsCount == 0) return false

    let curNode = this._connectionsHead.next

    while (curNode) {
      let connectionName = curNode.value?.getName()
      if (connectionName === name) {
        return true
      }

      curNode = curNode.next
    }

    return false
  }

  private hasStation(name: string): boolean {
    if (this._stationsCount === 0) return false

    let curNode = this._stationsHead.next

    while (curNode) {
      let stationName = curNode.value?.getName()
      if (stationName === name) {
        return true
      }

      curNode = curNode.next
    }

    return false
  }
}
