import { ISheetConfig, Sheet, SSLoader, JSONExporter } from './utils'

declare var global: {
    save(): void
}

const SSID = "任意のスプレッドシートのID"
const DIR_ID = "任意のGDriveフォルダのID"

namespace SheetConfigs {
    export const SampleSheet: ISheetConfig = {
        name: 'Sample',
        dataStartRow: 2, // シートの始点の行
        dataEndCol: 3, // シートの終点のカラム
    }
}

export class SSheetExporter {
    sampleSheet: Sheet;
    jsonExporter: JSONExporter

    constructor(ssId: string, dirId:string) {
        const sheet = new SSLoader().load(ssId)
        this.sampleSheet = new Sheet(sheet, SheetConfigs.SampleSheet)
        this.jsonExporter = new JSONExporter(dirId)
    }

    export() {
        const questionRows = this.sampleSheet.getCell("C3:C5")
        this.jsonExporter.export(
            "json-file",
            questionRows,
        )
    }
}

global.save = () => new SSheetExporter(SSID, DIR_ID).export()
