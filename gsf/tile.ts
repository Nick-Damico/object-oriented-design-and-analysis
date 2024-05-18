import Unit from './unit'

export class Tile {
  private _type: string
  // private _units: Map<string, Unit[]>
  private _units: Unit[]

  constructor() {
    this._type = 'Terrain'
    this._units = []
  }
  }

  setUnit(unit: Unit): void {
    this.unit = unit
  }
}
