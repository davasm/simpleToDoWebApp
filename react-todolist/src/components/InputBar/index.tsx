import React, {useState} from 'react'
import { todosT } from "../../types/todo"
import FilterBtn from "../FilterBtn";

interface InputBarProps {
    todos:todosT[];
    setTodos: React.Dispatch<React.SetStateAction<todosT[]>>;
    setFilter: React.Dispatch<React.SetStateAction<"all" | "completed" | "uncompleted">>;
}
const InputBar = ({ todos, setTodos, setFilter }: InputBarProps) => {

    const [title, setTitle] = useState("")
    const addTodo = (title:string) => {
        if (title){
            setTodos([...todos,{id:Math.random(),title,completed:false}]);
            setTitle("");
        }
    }


    return <div className="w-full flex items-center gap-3">
        <input 
        type="text" 
        className="w-full bg-[#1e2329] outline-none h-12 rounded-md px-2 text-[#e9e9e9] font-medium"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <FilterBtn filter="all" setFilter={setFilter} />
        
        <button 
        type="button" 
        className="bg-[#F6C90E] py-3 px-7 rounded-md text-[#1e2329]"
        onClick={() => addTodo(title)
        }
        >
            Adicionar
            </button>
        </div>
};

export default InputBar