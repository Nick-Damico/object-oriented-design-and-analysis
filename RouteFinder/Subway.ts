import Station from './Station'
import Connection from './Connection'

class ListNode<T> {
  public value?: T
  public next: ListNode<T> | null = null
  public prev: ListNode<T> | null = null
  constructor(value?: T | undefined) {
    this.value = value
  }

}

class LinkedList<T> {
  private _head: ListNode<T>
  private _tail: ListNode<T>
  private _size: number

  constructor() {
    let newNode = new ListNode<T>()
    this._head = newNode
    this._tail = this._head
    this._size = 0 // we do not count the dummy node
  }
}

export default class Subway {
  private _stations: LinkedList<Station>
  private _connections: LinkedList<Connection>
  
  constructor() {
    this._stations = new LinkedList<Station>
    this._connections = new LinkedList<Connection>
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

  getConnections(): LinkedListNode<Connection> {
    return this._connections
  }

  private addConnection(connection: Connection): void {
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
