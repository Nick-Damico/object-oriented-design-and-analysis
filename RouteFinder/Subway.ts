export default class Subway {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  getName(): string {
    return this._name
  }
}
