export default class Unit {
  private _type: string

  constructor(type: string) {
    this._type = type
  }

  getType(): string {
    return this._type
  }
}
