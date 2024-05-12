import { Tile } from './tile'
import Unit from './unit'

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
    this.init()
  }

  private init() {
    this._board = Array.from(Array(this.getHeight()), () =>
      new Array(this.getWidth()).fill(new Tile())
    )
  }

  public getTile(posX: number, posY: number): Tile {
    return this.getBoard()[posY][posX]
  }

  public getBoard(): Tile[][] {
    return this._board
  }

  public addUnit(tile: Tile, unit: Unit): void {
    tile.setUnit(unit)
  }
}
