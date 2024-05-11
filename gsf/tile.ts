import { iUnit } from './unit'

export interface Tile {
  type: string
  unit?: iUnit
}

export class TerrainTile {
  type: string
  unit: iUnit

  constructor() {
    this.type = 'Terrain'
  }

  setUnit(unit: iUnit): void {
    this.unit = unit
  }
}
