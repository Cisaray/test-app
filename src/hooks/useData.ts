import {IListComponent, IRawData, IResultData} from "../types";
import {useEffect, useState} from "react";
import {groupData, removeOrphansAndChildren, testData} from "../helpers/helper.ts";

/**
 * useData - хук, который забирает на себя всю логику обработки данных
 * @return {datas: IResultData[], addChild: (data: IRawData) => void, removeChild: (id: string) => void}
 */
export const useData = (): IListComponent => {
    const [rawData, setRawData] = useState<IRawData[]>(testData);
    const [datas, setDatas] = useState<IResultData[]>([])

    useEffect(() => {
        setDatas(groupData(rawData))
    }, [rawData])

    function addChild (newItem: IRawData) {
        setRawData(prev => {
            const result = [...prev, newItem]
            setDatas(groupData(result))
            return result
        })
    }

    function removeChild (id: string) {
        setRawData(prev => {
            const newData = prev.filter(item => item.id !== id)
            const result = removeOrphansAndChildren(newData)
            setDatas(groupData(result))
            return result
        })
    }

    return {data: datas, addChild, removeChild}
}