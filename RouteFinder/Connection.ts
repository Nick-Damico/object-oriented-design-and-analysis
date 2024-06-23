import Station from './Station'

export default class Connection {
  private _station1: Station
  private _station2: Station
  private _lineName: string

  constructor(station1: Station, station2: Station, lineName: string) {
    this._station1 = station1
    this._station2 = station2
    this._lineName = lineName
  }

  getStation1(): Station {
    return this._station1
  }

  getStation2(): Station {
    return this._station2
  }

  getLineName(): string {
    return this._lineName
  }
}
