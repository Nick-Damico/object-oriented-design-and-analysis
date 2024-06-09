export enum UnitType {
  infantry = 'Infantry',
  knight = 'Knight'
}

// Replace with Class
export enum Weapon {
  rifle = 'Rifle'
}

export default class Unit {
  private _id: string
  private _type: UnitType
  private _name: string

  private _weapons: Weapon[]
  private _properties: Map<string, any>

  constructor(type: UnitType, id?: string) {
    this._id = id || crypto.randomUUID()
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
    if (this._weapons === undefined) {
      this._weapons = []
    }

    this._weapons.push(weapon)
  }

  getWeapons(): Weapon[] {
    return this._weapons
  }

  setProperty(property: string, value: any) {
    this._properties.set(property, value)
  }

  getProperty(property: string): any {
    if (!this.getProperties().has(property)) {
      throw new Error(`property ${property} does not exist`)
    }

    return this.getProperties().get(property)
  }

  getProperties(): Map<string, any> {
    return this._properties
  }
}
