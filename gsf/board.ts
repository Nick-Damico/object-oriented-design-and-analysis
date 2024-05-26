import { Tile } from './tile'
import Unit from './unit'

export class Board {
  private _width: number
  private _height: number
  private _board: Tile[][]

  constructor(width: number, height: number) {
    this._width = width
    this._height = height
    this.init()
  }

  private init() {
    this._buildBoard(this.getHeight(), this.getWidth())
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

  public getUnits(x: number, y: number): Unit[] {
    let tile = this.getTile(x, y)
    return tile.getUnits()
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

  private _buildBoard(height: number, width: number) {
    for (let row = 0; row < height; row++) {
      this._board[row] = []

      for (let column = 0; column < width; column++) {
        this._board[row][column] = new Tile()
      }
    }
  }

  private _altBuildBoard(height: number, width: number) {
    for (let row = 0; row < height; row++) {
      this._board[row] = []

      for (let column = 0; column < width; column++) {
        this._board[row][column] = new Tile()
      }
    }
  }
}
