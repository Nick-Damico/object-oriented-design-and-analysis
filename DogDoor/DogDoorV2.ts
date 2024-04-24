export default class DogDoor {
  static readonly openDuration: number = 5000
  private _open: boolean
  private _allowedBarks: Bark[]

  constructor(bark: Bark) {
    this._open = false
    this._allowedBarks = [bark]
  }

  open(): void {
    this._open = true
    setTimeout(() => {
      this.close()
    }, DogDoor.openDuration)
  }

  close(): void {
    this._open = false
  }

  isOpen(): boolean {
    return this._open
  }

  getAllowedBarks(): Bark[] {
    return this._allowedBarks
  }
}

export class Remote {
  private _door: DogDoor

  constructor(door: DogDoor) {
    this._door = door
  }

  pressButton(): void {
    console.log('Pressing the remote control button...')
    if (this.getDoor().isOpen()) return

    this.getDoor().open()
  }

  private getDoor(): DogDoor {
    return this._door
  }
}

/**
 * Chapter 4 Challenge pg.175
 *
 * Implement Bark Class
 */

export class Bark {
  private _sound: string

  constructor(sound: string) {
    this._sound = sound
  }

  equals(bark: Bark): boolean {
    return this.getSound() == bark.getSound()
  }

  getSound(): string {
    return this._sound
  }
}

export class Dog {
  private _bark: string

  constructor(bark: string) {
    this._bark = bark
  }

  getBark(): string {
    return this._bark
  }

  equals(bark: string): boolean {
    return bark === this.getBark()
  }
}
