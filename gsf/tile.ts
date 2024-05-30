import Unit from './unit'

export enum Type {}

export default class Tile {
  // private _units: Map<string, Unit[]>
  private _units: Unit[]
  private _type: Type

  // Does Order matter on units?
  // We might want to implement with a Queue or Stack
  constructor(type: Type) {
    this._units = []
    this._type = type
  }

  public addUnit(unit: Unit): void {
    this._units.push(unit)
  }

  public getUnits(): Unit[] {
    return this._units
  }

  public getType(): Type {
    return this._type
  }

  public removeUnit(unit: Unit): void {
    let unitIndex = this.getUnits().indexOf(unit)
    if (unitIndex === -1) return

    this.getUnits().splice(unitIndex, 1)
  }

  public removeUnits(): void {
    this.getUnits().forEach((unit) => this.removeUnit(unit))
  }
}
