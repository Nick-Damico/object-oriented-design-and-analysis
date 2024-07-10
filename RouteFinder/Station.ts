export default class Station {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  getName(): string {
    return this._name
  }

  equals(station: Station): boolean {
    return this.hasSameName(station.getName())
  }

  private hasSameName(name: string): boolean {
    return name.toUpperCase() === this.getName().toUpperCase()
  }
}
