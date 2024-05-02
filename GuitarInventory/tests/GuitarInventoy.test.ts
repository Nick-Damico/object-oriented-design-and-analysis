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

beforeAll(() => {
  inventory.addInstrument(
    'SN-123456',
    2000.0,
    new InstrumentSpec(fenderProperties)
  )

  console.log('hello')
})

describe('#instrumentCount', () => {
  it('returns inventory total count', () => {
    expect(inventory.instrumentCount()).toEqual(1)
  })
})

describe('#get(serialNumber: string', () => {
  describe('Instrument Not Found', () => {
    it('returns null', () => {
      expect(inventory.get('badSerialNumber')).toBe(null)
    })
  })

  describe('Instrument Found', () => {
    it('returns instrument', () => {
      expect(inventory.get('SN-123456')).toBeInstanceOf(Instrument)
    })
  })
})

describe('#search', () => {
  it('returns a collection of matching Instruments', () => {
    const matchingSpec = new InstrumentSpec(fenderProperties)
    const matchingInstruments = inventory.search(matchingSpec)

    expect(matchingInstruments.length).toEqual(1)
  })
})
