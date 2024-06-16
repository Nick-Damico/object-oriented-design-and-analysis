import UnitGroup, { UnitMap } from '../models/unitGroup'

describe('UnitGroup', () => {
  describe('.constructor', () => {
    it('allows the user to name the Unit Group', () => {
      let newUnitGroup = new UnitGroup('Strike Unit')

      expect(newUnitGroup.getName()).toBe('Strike Unit')
    })
  })
})
