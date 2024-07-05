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

  // Add to Tail
  add(value: T): void {
    if (this.contains(value)) return

    this.addAtTail(value)
  }

  addAtTail(value: T): void {
    let curTail = this._getTail()
    let newNode = new ListNode(value)

    curTail.next = newNode
    newNode.prev = curTail
    this._tail = newNode
    ++this._size
  }

  contains(value: T): boolean {
    return this.indexOf(value) >= 0
  }

  indexOf(value: T): number {
    let index = 1
    let currentNode = this._head.next

    while (currentNode) {
      if (currentNode.value === value) {
        return index
      }

      currentNode = currentNode.next
      ++index
    }

    return -1
  }

  toArray(): T[] {
    let collection: T[] = []
    let currentNode = this._head.next

    while (currentNode) {
      if (currentNode.value) {
        collection.push(currentNode.value)
      }

      currentNode = currentNode.next
    }

    return collection
  }

  size(): number {
    return this._size
  }

  private _getTail(): ListNode<T> {
    return this._tail
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

    this._stations.add(new Station(name))
  }

  getStations(): Station[] {
    return this._stations.toArray()
  }

  getConnections(): Connection[] {
    return this._connections.toArray()
  }

  }

  private addConnection(connection: Connection): void {
    this._connections.add(connection)
  }

  private hasStation(name: string): boolean {
    if (this._stations.size() === 0) return false

    let stationNames = this._stations
      .toArray()
      .map((station) => station.getName())

    return stationNames.includes(name)
  }

        return true
      }

      curNode = curNode.next
    }

    return false
  }
}
