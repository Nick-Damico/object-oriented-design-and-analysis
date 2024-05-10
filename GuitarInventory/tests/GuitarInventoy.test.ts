import Inventory, {
  Instrument,
  InstrumentSpec,
  InstrumentType,
  InstrumentProperties,
  GuitarType,
  Builder,
  Wood
} from '../InventoryV2'

jest.useFakeTimers()

const inventory = new Inventory()
const fenderProperties: InstrumentProperties = {
  type: InstrumentType.guitar,
  builder: Builder.fender,
  backWood: Wood.indianRoseWood,
  sideWood: Wood.indianRoseWood,
  topWood: Wood.spruce
}

// Mandolins
const gibsonMandolinProps: InstrumentProperties = {
  type: InstrumentType.mandolin,
  guitarType: GuitarType.acustic,
  builder: Builder.gibson,
  backWood: Wood.maple,
  topWood: Wood.maple,
  sideWood: Wood.maple
}

// Banjos
const gibsonBanjoProps: InstrumentProperties = {
  type: InstrumentType.banjo,
  guitarType: GuitarType.acustic,
  builder: Builder.gibson,
  sideWood: Wood.maple,
  backWood: Wood.maple
}

beforeAll(() => {
  inventory.addInstrument(
    'SN-91019920',
    5495.99,
    new InstrumentSpec(gibsonMandolinProps)
  )
  inventory.addInstrument(
    'SN-123456',
    2000.0,
    new InstrumentSpec(fenderProperties)
  )
  inventory.addInstrument(
    'NS-8900231',
    2945.95,
    new InstrumentSpec(gibsonBanjoProps)
  )
})

describe('Instrument', () => {
  describe('#instrumentCount', () => {
    it('returns inventory total count', () => {
      expect(inventory.instrumentCount()).toEqual(3)
    })
  })

  describe('#get(serialNumber: string', () => {
    describe('Instrument Not Found', () => {
      it('returns null', () => {
        expect(inventory.get('badSerialNumber')).toBe(null)
      })
    })
  })

  describe('Instrument Found', () => {
    it('returns instrument', () => {
      expect(inventory.get('SN-123456')).toBeInstanceOf(Instrument)
    })
  })
  describe('#search', () => {
    it('returns a collection of matching Instruments', () => {
      const matchingSpec = new InstrumentSpec(fenderProperties)
      const matchingInstruments = inventory.search(matchingSpec)

      expect(matchingInstruments.length).toEqual(1)
    })
  })
})
