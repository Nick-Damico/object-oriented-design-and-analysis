import Unit from './unit'

type UnitMap = Map<string, Unit>

class UnitGroup {
  private _units: UnitMap
  private _name: string
  private _size: number

  constructor(name: string, units: Unit[]) {
    this._name = name
    this.init(units)
  }

  private init(units: Unit[]) {
    this._units = new Map()

    for (let unit of units) {
      this._units.set(unit.getId(), unit)
      ++this._size
    }
  }

  getName(): string {
    return this._name
  }

  setName(name: string): void {
    this._name = name
  }

  getUnits(): UnitMap {
    return this._units
  }

  getSize(): number {
    return this._size
  }

  addUnit(unit: Unit) {
    this.getUnits().set(unit.getId(), unit)
    ++this._size
  }

  removeUnit(id: string): void {
    if (!this.getUnits().has(id)) return

    this.getUnits().delete(id)
    --this._size
  }
}
