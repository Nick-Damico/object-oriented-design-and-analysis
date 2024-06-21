import Station from './Station'

export default class Subway {
  private _name: string
  private _stations: Station[] // Make a LinkedList
  private _stationsCount: number

  constructor(name: string) {
    this._name = name
  }

  getName(): string {
    return this._name
  }

  addStation(name: string): void {
    let newStation = new Station(name)

    this._stations.push(newStation)
    ++this._stationsCount
  }
}
