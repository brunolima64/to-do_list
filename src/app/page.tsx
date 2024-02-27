"use client"

import { ItemList } from "@/components/ItemList";
import { ItemListType } from "@/types/ItemListType";
import { KeyboardEvent, useState } from "react";

export const Page = () => {
  const [list, setList] = useState<ItemListType[]>([]);
  const [titleField, setTitleField] = useState('');
  const [checked, setChecked] = useState<boolean>(false);

  const handleAddEnter = (e: KeyboardEvent) => {
    if(e.key === 'Enter' && titleField !== '') {
      setTitleField('');
      let newList = setList([...list, { id: list.length + 1, title: titleField, checked: checked }])
      return newList;
    }
  }
  const handleAddButton = () => {
      if(titleField.length > 50) alert('maximo 50 caracteres!'); 
      if(titleField) {
      setTitleField('');
      let newList = setList([...list, { id: list.length + 1, title: titleField, checked: checked }])
      return newList;
      } else {
      return alert('O campo não pode estar em branco')
      }
 }

  const handleIsChecked = (itemId: number) => {
    let isChecked = list.map(item => item.id === itemId ? { ...item, checked: !item.checked } : item)
    return setList(isChecked);  
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-3 my-5 rounded-lg border border-gray-700 bg-gray-950">
        <h1 className="text-4xl font-bold text-center my-3 p-3 border-b-2 border-gray-700">Lista de tarefas</h1> 
        <div className="border border-gray-700 p-3 my-3 rounded-md flex">
            <input 
                type="text" 
                placeholder="Digite uma tarefa"
                className="flex-1 p-3 text-xl outline-none bg-gray-800 border-b border-gray-700 rounded-md"
                value={titleField}
                onChange={e => setTitleField(e.target.value)}
                onKeyUp={handleAddEnter}
            />
              <button 
                  className="p-3 mx-3 rounded-md border border-gray-700 hover:bg-gray-800"
                  onClick={handleAddButton}
              >Adicionar</button>
        </div>
        <ul>
          {list.map(item => (
            <ItemList item={item} onChecked={handleIsChecked}/>
          ))}
        </ul>
      </div>
      <footer>
        <p className="mx-auto max-w-sm p-3 text-center font-medium border-b border-gray-600">Criado por @Bruno lima</p>
      </footer>
    </div>
  )
}
export default Page;