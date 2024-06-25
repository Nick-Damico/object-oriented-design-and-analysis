import Station from './Station'
import Connection from './Connection'

interface LinkNode {
  value: Station | Connection
  next?: LinkNode
  prev?: LinkNode
}

interface StationNode extends LinkNode {
  value: Station
}

interface ConnectionNode extends LinkNode {
  value: Connection
}

export default class Subway {
  private _stations: LinkNode
  private _connections: LinkNode
  private _stationsCount: number

  addStation(stationName: string): void {
    let curNode = this._stations

    while (curNode.next) {
      curNode = curNode.next
    }

    let newStation = new Station(stationName)
    curNode.next = {
      value: newStation,
      prev: curNode
    } as LinkNode
    ++this._stationsCount
  }

  addConnection(
    lineName: string,
    stationOneName: string,
    stationTwoName: string
  ) {}

  hasStation(stationName: string): boolean {
    return false
  }
}
