import { Tile } from './tile'
import Unit from './unit'

export class Board {
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

  public getHeight(): number {
    return this._height
  }

  public getWidth(): number {
    return this._width
  }

  public getBoard(): Tile[][] {
    return this._board
  }

  public getTile(x: number, y: number): Tile {
    return this.getBoard()[x - 1][y - 1]
  }
  }

  public addUnit(unit: Unit, x: number, y: number): void {
    let tile = this.getTile(x, y)
    tile.addUnit(unit)
  }

  public removeUnit(unit: Unit, x: number, y: number): void {
    let tile = this.getTile(x, y)
    tile.removeUnit(unit)
  }

  public removeUnits(x: number, y: number): void {
    let tile = this.getTile(x, y)
    tile.removeUnits()
  }
}
