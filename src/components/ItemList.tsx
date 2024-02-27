"use client"
import { ItemListType } from "@/types/ItemListType"

type Props = {
    item: ItemListType;
    onChecked: (itemId: number) => void;
}
export const ItemList = ({item, onChecked}: Props) => {
    return (
        <li key={item.id} className="flex items-center p-3 my-3 border border-gray-700 bg-gray-800 rounded-md">       
            <input 
                type="checkbox"
                checked={item.checked}
                onClick={() => onChecked(item.id)}
                className="w-6 h-6 mr-2"
            />
            <p className={`${item.checked ? 'text-decoration-line: line-through' : 'text-decoration-line: none'} text-xl overflow-hidden`}>
                {item.title}
            </p>
        </li>
    )
}