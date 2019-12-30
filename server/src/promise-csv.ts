import parse from 'csv-parse'
import fs from 'fs'
import toArray from 'stream-to-array'
import { promisify } from 'bluebird'

export default promisify(
  (
    file: string,
    callback: (err: Error, array: string[][]) => unknown,
  ) => {
    const parser = parse({
      delimiter: ','
    })
    fs
      .createReadStream(
        file,
      )
      .pipe(
        parser,
      )
    toArray(
      parser,
      callback,
    )
  }
)
