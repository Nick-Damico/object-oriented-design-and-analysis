import DogDoor from './DogDoorV2'
import { Bark } from './DogDoorV2'

export default class BarkRecognizer {
  private _door: DogDoor

  constructor(door: DogDoor) {
    this._door = door
  }

  public recognize(bark: Bark): void {
    console.log('Listening...')
    for (const allowedBark of this.getDoor().getAllowedBarks()) {
      if (!allowedBark.equals(bark)) continue

      this.getDoor().open()
    }
  }

  private getDoor(): DogDoor {
    return this._door
  }
}
