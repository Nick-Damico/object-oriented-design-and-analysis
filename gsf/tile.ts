import Unit from './unit'

export class Tile {
  private _type: string
  // private _units: Map<string, Unit[]>
  private _units: Unit[]

  constructor() {
    this._type = 'Terrain'
    this._units = []
  }

  getType(): string {
    return this._type
  }

  public setUnit(unit: Unit): void {
    this._units.push(unit)
  }

  getUnits(): Unit[] {
    return this._units
  }

  }
}
