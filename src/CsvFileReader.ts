import fs from 'fs'

export class CsvFileReader {
  data: string[][] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
    .readFileSync(this.filename, {
      encoding: 'utf-8' //strings contents of the file
    })
    .split('\n')
    .map(
      (row: string): string[] => {
      return row.split(',');
    });
  }
  
}
