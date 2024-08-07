import * as fs from 'node:fs'
import * as path from 'path'
import Subway from './Subway'
import Station from './Station'
import Connection from './Connection'
import { constants } from 'fs/promises'
import { error } from 'console'

class File {
  private _filePath: string

  constructor(fileName: string) {
    let filePath = path.join(__dirname, 'lib', fileName)
    if (!fs.existsSync(filePath))
      throw new Error(`File ${fileName} does not exist`)

    this._filePath = filePath
  }

  read(): string {
    return fs.readFileSync(this._filePath, 'utf-8')
  }
}

class SubwayLoader {
  private _subway: Subway

  constructor() {
    this._subway = new Subway()
  }

  loadFromFile(fileName: string): void {
    let file = new File(fileName)
    let fileContents = file.read()
    let [stations, ...lines] = fileContents.split(/\n\s*\n/)
    this._loadStations(stations.split(/\n/))

    for (let line of lines) {
      this._loadLines(line.split(/\n/))
    }
  }

  private _loadLines(names: string[]): void {
    if (names.length === 0) return

    let [lineName, ...stations] = names
    if (!lineName) return

    for (let i = 0; i < stations.length - 1; ++i) {
      let stationName1 = stations[i]
      let stationName2 = stations[i + 1]
      this._subway.addConnection(stationName1, stationName2, lineName)
    }

    console.log('Done Processing Connections')
  }

  private _loadStations(stations: string[]): void {
    for (let name of stations) {
      this._subway.addStation(name)
    }
    console.log('Done Processing Stations')
  }
}

const loader = new SubwayLoader()
loader.loadFromFile('objectville_subway.txt')
