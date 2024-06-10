import Unit from './unit'

class UnitGroup {
  private _units: Unit[]
  private _name: string
  private _size: number

  constructor(name: string) {
    this._name = name
    this._units = []
    this._size = 0
  }

  getName(): string {
    return this._name
  }

  setName(name: string): void {
    this._name = name
  }

  getUnits(): Unit[] {
    return this._units
  }

  getSize(): number {
    return this._size
  }

  addUnit(unit: Unit) {
    this.getUnits().push(unit)
    ++this._size
  }

  removeUnit(unit: Unit): void {
    if (!this.getUnits().includes(unit)) return

    let unitIndex = this.getUnits().indexOf(unit)
    this.getUnits().splice(unitIndex, 1)
    --this._size
  }
}
