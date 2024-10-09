import {v4} from "uuid";
import {IRawData, IResultData} from "../types";

export const testData: IRawData[] = [
    {
        id: v4(),
        parentId: null,
        text: 'parent'
    },
]

/**
 * removeOrphansAndChildren - функция, удаляющая из сырых данных детей без родителей, и их детей по цепочке
 * @param data - сырые данные, массив из IRawData
 * @return IRawData[] - массив из отфильтрованных IRawData
 */
export const removeOrphansAndChildren = (data: IRawData[]): IRawData[] => {
    const ids = new Set(data.map(item => item.id));
    const toRemove = new Set<string>();


    data.forEach(item => {
        if (item.parentId !== null && !ids.has(item.parentId)) {
            toRemove.add(item.id);
        }
    });

    const stack = [...toRemove];

    while (stack.length > 0) {
        const currentId = stack.pop()!;
        data.forEach(item => {
            if (item.parentId === currentId) {
                toRemove.add(item.id);
                stack.push(item.id);
            }
        });
    }

    return data.filter(item => !toRemove.has(item.id));
};


/**
 * groupData - функция, которая группирует данные в зависимости от parentId отдельного объекта. Если parentId === null, то значит, что это родитель
 * @param data - сырые данные, массив из IRawData
 * @return IResultData[]
 */
export const groupData = (data: IRawData[]): IResultData[] => {
    const map = new Map();
    const result: IResultData[] = [];


    data.forEach(item => {
        map.set(item.id, { ...item, children: [] });
    });


    data.forEach(item => {
        const parent = map.get(item.parentId);

        if (parent) {
            parent.children.push(map.get(item.id));
        } else {
            result.push(map.get(item.id))
        }
    });

    return result;
};






