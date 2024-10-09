import {IRawData} from "./rawData.type.ts";

export interface IResultData extends IRawData {
    children: IResultData[];
}