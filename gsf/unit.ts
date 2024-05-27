enum Type {}

export default class Unit {
  private _properties: Map<string, number | string>
  private _type: Type

  constructor(type: Type) {
    this._properties = new Map()
    this._type = type
  }

  getProperty(property: string): number | string | undefined {
    return this.getProperties().get(property)
  }

  getProperties(): Map<string, number | string> {
    return this._properties
  }
}
