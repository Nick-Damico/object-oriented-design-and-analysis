export enum UnitType {
  infantry = 'Infantry'
}

export default class Unit {
  private _properties: Map<string, number | string>
  private _type: UnitType

  constructor(type: UnitType) {
    this._properties = new Map()
    this.setType(type)
  }

  setType(type: UnitType): void {
    this._type = type
  }

  getType(): UnitType {
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
