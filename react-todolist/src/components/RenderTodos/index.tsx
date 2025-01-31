import {todosT} from "../../types/todo";
import {TrashOutline, CheckmarkCircleOutline} from "react-ionicons";
import React, { useState } from 'react';

interface RenderTodosProps {
    todos:todosT[];
    setTodos:React.Dispatch<React.SetStateAction<todosT[]>>
    filter: "all" | "completed" | "uncompleted";
}

const RenderTodos = ({todos,setTodos,filter}: RenderTodosProps) => {
    const [addCount, setAddCount] = useState(0);
    const [completeCount, setCompleteCount] = useState(0)

    const filteredTodos = todos.filter((todo) => {
        if(filter ==="completed") return todo.completed;
        if(filter ==="uncompleted") return !todo.completed;
        return todo;
    });

    const handleDelete = (id:number) => {
        const clone = [...todos];
        const target = clone.findIndex((item) => item.id === id)
        clone.splice(target,1);
        setTodos(clone);
    };
    const handleComplete = (id:number) => {
        setTodos(todos.map((t) =>{
            if (t.id === id) { 
                t.completed = !t.completed;
                setCompleteCount(completeCount + 1);
            }
            return t;
        }));
    };

    return <div className="w-full h-[485px] mt-3 overflow-y-auto py-2 pr-2">
        <div className="flex justify-between mb-4">
            <span className="text-[#F6C90E] bg-[#1e2329] py-1 px-3 rounded-md shadow-lg">
                Concluídos: {completeCount}
            </span>
        </div>
        {filteredTodos.map((todo: todosT) => {
        return <div 
                key={todo.id} 
                className={`w-full bg-[#1e2329] rounded-md h-12 px-3 mb-3 text-white flex items-center justify-between ${todo.completed && "opacity-[65%]"}`}>
            <span className={'${todo.completed && "line-through'}>{todo.title}</span>
            <div className="flex-items-center gap-3">
                <button onClick={() => handleDelete(todo.id)}>
                    <TrashOutline 
                    color={"#F87171"} 
                    width={"24px"} 
                    height={"24px"} 
                    />
                </button>
                <button onClick={() => handleComplete(todo.id)}>
                    <CheckmarkCircleOutline 
                    color={"#F6c90e"} 
                    width={"24px"} 
                    height={"24px"} 
                    />
                </button>
            </div>
        </div>;
    })}
    </div>
};

export default RenderTodos;