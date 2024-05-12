import Unit from './unit'

export class Tile {
  type: string
  unit: Unit

  constructor() {
    this.type = 'Terrain'
  }

  setUnit(unit: Unit): void {
    this.unit = unit
  }
}
