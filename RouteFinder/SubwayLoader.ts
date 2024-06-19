import Subway from './Subway'
import Station from './Station'
import Connection from './Connection'

class SubwayLoader {
  static loadFromFile(file_path: string): Subway {
    /**
     * We need to get file.
     * Read the file and load the subways.
     */
    return new Subway('Test')
  }
}
