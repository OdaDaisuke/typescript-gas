

export type GSS = GoogleAppsScript.Spreadsheet.Spreadsheet
export type GSheet = GoogleAppsScript.Spreadsheet.Sheet

export interface ISheetConfig {
    name: string
    dataStartRow: number
    dataEndCol: number
}

export class SSLoader {
    load(ssid: string): GSS {
        return SpreadsheetApp.openById(ssid)
    }
}

export class Sheet {
    config: ISheetConfig
    sheet: GSheet;
    static sheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

    constructor(ss: GSS, config: ISheetConfig) {
        this.sheet = ss.getSheetByName(config.name)
        if(!this.sheet) {
            throw new Error(`sheet ${config.name} not fount`)
        }
        this.config = config
    }

    getCell(cellPos: string): Object {
      return this.sheet.getRange(cellPos).getValue()
    }

}
