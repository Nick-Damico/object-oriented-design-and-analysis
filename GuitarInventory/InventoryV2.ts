// Start back on page 211
export default class Inventory {
  private instruments: Instrument[]

  constructor() {
    this.instruments = new Array()
  }

  instrumentCount(): number {
    return this.instruments.length
  }

  addInstrument(
    serialNumber: string,
    price: number,
    spec: InstrumentSpec
  ): void {
    let newInstrument = new Instrument(serialNumber, price, spec)

    this.instruments.push(newInstrument)
  }

  get(serialNumber: string): Instrument | null {
    for (const instrument of this.instruments) {
      if (instrument.getSerialNumber() === serialNumber) {
        return instrument
      }
    }

    return null
  }

  search(spec: InstrumentSpec): Instrument[] {
    const matchingInstruments: Instrument[] = new Array()
    for (const instrument of this.instruments) {
      if (instrument.getSpec().matches(spec))
        matchingInstruments.push(instrument)
    }
    return matchingInstruments
  }
}

export class Instrument {
  private _serialNumber: string
  private _price: number
  private _spec: InstrumentSpec

  constructor(serialNumber: string, price: number, spec: InstrumentSpec) {
    this._serialNumber = serialNumber
    this._price = price
    this._spec = spec
  }

  getSerialNumber(): string {
    return this._serialNumber
  }

  getPrice(): number {
    return this._price
  }

  setPrice(price: number): void {
    this._price = price
  }

  getSpec(): InstrumentSpec {
    return this._spec
  }
}

export enum GuitarType {
  acustic = 'Acustic',
  electric = 'Electric'
}

export enum Builder {
  fender = 'Fender',
  gibson = 'Gibson',
  collings = 'Collings'
}
export enum Wood {
  alder = 'Alder',
  cedar = 'Cedar',
  indianRoseWood = 'Indian Rose Wood',
  maple = 'Maple',
  spruce = 'Spruce'
}
export enum Style {
  a = 'A',
  f = 'F'
}

export enum InstrumentType {
  guitar = 'Guitar',
  banjo = 'Banjo',
  dobro = 'Dobro',
  fiddle = 'Fiddle',
  mandolin = 'Mandolin'
}

export type InstrumentProperties = {
  type: InstrumentType
  builder: Builder
  backWood: Wood
  sideWood: Wood
  topWood: Wood
  style?: Style
  guitarType?: GuitarType
}

export class InstrumentSpec {
  private properties: Map<string, string>

  constructor(properties: InstrumentProperties) {
    this.properties = new Map(Object.entries(properties))
  }

  getProperties(): Map<string, string> {
    return this.properties
  }

  getProperty(key: string): string | undefined {
    return this.properties.get(key)
  }

  matches(spec: InstrumentSpec): boolean {
    for (const property of spec.getProperties().keys()) {
      if (spec.getProperty(property) !== this.getProperty(property)) {
        return false
      }
    }

    return true
  }
}

/**
 * Example of Usage
 *
 * Creating a Guitar
 * const guitarProperties: InstrumentProperties = {
 *   type: InstrumentType.guitar,
 *   builder: Builder.fender,
 *   wood: Wood.alder,
 *   guitarType: GuitarType.acustic
 * const guitarSpec: InstrumentSpec = new InstrumentSpec(guitarProperties)
 * }
 * const newGuitar: Instrument = new Instrument(
 *  crypto.randomUUID(),
 *  2000,
 * guitarSpec
 * )
 *
 * OR You can use the addInstrument on Inventory
 * const inventory = new Inventory()
 * inventory.addInstrument(crypto.randomUUID(), 2000, guitarSpec)
 */
