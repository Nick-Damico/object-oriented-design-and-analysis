export default class DogDoor {
  static readonly openDuration: number = 5000
  private _open: boolean

  constructor() {
    this._open = false
  }

  isOpen(): boolean {
    return this._open
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

new Remote(new DogDoor())
