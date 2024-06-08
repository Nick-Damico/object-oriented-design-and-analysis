export enum UnitType {
  infantry = 'Infantry'
}

// Replace with Class
export enum Weapon {}

export default class Unit {
  private _id: string
  private _type: UnitType
  private _name: string

  private _weapons: Weapon[]
  private _properties: Map<string, any>

  constructor(type: UnitType) {
    this._id = crypto.randomUUID()
    this.setType(type)
    this._properties = new Map()
  }

  getId(): string {
    return this._id
  }

  setType(type: UnitType): void {
    this._type = type
  }

  getType(): UnitType {
    return this._type
  }

  setName(name: string): void {
    this._name = name
  }

  getName(): string {
    return this._name
  }

  addWeapon(weapon: Weapon): void {
    this._weapons.push(weapon)
  }

  getWeapons(): Weapon[] {
    return this._weapons
  }

  setProperty(property: string, value: any) {
    this._properties.set(property, value)
  }

  getProperty(property: string): any {
    return this.getProperties().get(property)
  }

  getProperties(): Map<string, any> {
    return this._properties
  }
}
