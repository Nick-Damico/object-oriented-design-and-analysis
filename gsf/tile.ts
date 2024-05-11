export interface Tile {
  type: string
}

export class TerrainTile {
  type: string

  constructor() {
    this.type = 'Terrain'
  }
}
