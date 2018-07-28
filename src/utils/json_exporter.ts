export class JSONExporter {
    dirId: string;
    constructor(dirId: string) {
        this.dirId = dirId
    }

    export(name: string, data: any) {
        const str = JSON.stringify(data, null, 2)
        const d = new Date()
        const suffix = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`
        const filename = `${name}-${suffix}.json`
        const blob = Utilities.newBlob('', 'application/json', filename).setDataFromString(str, 'utf-8')
        const folder = DriveApp.getFolderById(this.dirId)
        folder.createFile(blob as any)
        Browser.msgBox(`JSONファイルを保存しました: ${filename}`)
    }
}
