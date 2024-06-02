enum Type {}

export default class Unit {
  private _properties: Map<string, number | string>
  private _type: Type

  constructor(type: Type) {
    this._properties = new Map()
    this.setType(type)
  }

  setType(type: Type): void {
    this._type = type
  }

  getType(): Type {
    return this._type
  }

  setProperty(property: string, value: number | string) {
    this._properties.set(property, value)
  }

  getProperty(property: string): number | string | undefined {
    return this.getProperties().get(property)
  }

  getProperties(): Map<string, number | string> {
    return this._properties
  }
}
