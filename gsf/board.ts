import { Tile, TerrainTile } from './tile'

class Board {
  private _width: number
  private _height: number
  private _board: Tile[][]

  /**
   * What is the unit of measurement?
   * Do we need to support different measurement systems?
   * Do we handle conversion?
   * How large is a tile?
   */
  constructor(width: number, height: number) {
    this._width = width
    this._height = height
    this._board = Array.from(Array(width), () =>
      new Array(height).fill(new TerrainTile())
    )
  }

  public getTile(posX: number, posY: number): Tile {
    return this.getBoard()[posY][posX]
  }

  public getBoard(): Tile[][] {
    return this._board
  }
}
