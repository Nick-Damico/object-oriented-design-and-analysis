import Unit, { UnitType } from '../models/unit'

// jest.useFakeTimers()
let infantryUnit

beforeAll(() => {
  infantryUnit = new Unit(UnitType.infantry)
})

describe('Unit', () => {
  describe('#constructor', () => {
    it('creates a Unit object', () => {
      expect(new Unit(UnitType.infantry)).toBeInstanceOf(Unit)
    })

    it('creates a Unit object using the specified type', () => {
      expect(infantryUnit.getType()).toEqual(UnitType.infantry)
    })

    it('generates and sets the Unit id', () => {
      expect(infantryUnit.getId()).toBeDefined
    })

    it('creates an instance of Unit with custom properties map', () => {
      expect(infantryUnit.getProperties()).toBeInstanceOf(Map)
      expect(infantryUnit.getProperties().size).toBe(0)
    })
  })

  describe('Unit properties', () => {
    it('allows setting a custom property and value on a Unit', () => {
      const startingHitPoints = 25

      infantryUnit.setProperty('hitPoints', startingHitPoints)

      expect(infantryUnit.getProperty('hitPoints')).toBe(startingHitPoints)
    })

    it('allows updating a properties value', () => {
      const startingHitPoints = 25
      const updateHitPoints = 10

      infantryUnit.setProperty('hitPoints', startingHitPoints)
      expect(infantryUnit.getProperty('hitPoints')).toBe(startingHitPoints)

      infantryUnit.setProperty('hitPoints', updateHitPoints)
      expect(infantryUnit.getProperty('hitPoints')).toBe(updateHitPoints)
    })

    it('returns undefined if accessing a non-existent property', () => {
      expect(infantryUnit.getProperty('foo')).toBeUndefined
    })
  })
})
