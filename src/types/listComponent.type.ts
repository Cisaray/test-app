import {IResultData} from "./resultData.type.ts";
import {IRawData} from "./rawData.type.ts";

export interface IListComponent {
    data: IResultData[],
    addChild: (item: IRawData) => void,
    removeChild: (id: string) => void
}