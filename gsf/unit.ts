export interface iUnit {
  _type: string
}

export class Unit implements iUnit {
  _type: string

  constructor(type: string) {
    this._type = type
  }

  getType(): string {
    return this._type
  }
}
