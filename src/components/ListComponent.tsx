import {Button} from "./Button.tsx";
import {v4} from "uuid";
import {FC} from "react";
import {IListComponent} from "../types";

export const ListComponent: FC<IListComponent> = ({data, addChild, removeChild}) => {
    return (
        <div className="App">
            {data.map((item) =>
                <ul className='ml-[50px] px-3' key={item.id}>
                    <li className='flex items-center justify-between ml-[50px] gap-3 mt-2 border border-[#425BFB] rounded-xl p-3 bg-white'>
                        <span className='flex-1'>{item.text}</span>
                        <div className='flex items-center justify-center gap-3 h-full'>
                            <Button text={'+'} onClick={() => addChild({id: v4(), text: 'new child', parentId: item.id})}/>
                            {item.parentId ?
                                <Button text={'-'} onClick={() => removeChild(item.id)}/>
                                : null}
                        </div>
                    </li>
                    {item.children.length > 0 ? ListComponent({data: item.children, addChild, removeChild}) : null}
                </ul>
            )
            }
        </div>
    );
};

