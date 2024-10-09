import type {ButtonHTMLAttributes, FC} from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button: FC<IButton> = ({text, onClick}) => {
    return (
        <button className='bg-white px-1 font-bold text-xl text-center rounded-full bg-[#B4C6D580] flex items-center justify-center'
                onClick={onClick}><span>{text}</span>
        </button>
    );
};

