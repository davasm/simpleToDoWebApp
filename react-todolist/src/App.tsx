import { useState } from 'react'
import { todosT } from './types/todo';
import Layout from "./layout";
import InputBar from './components/InputBar';
import RenderTodos from "./components/RenderTodos"
import Title from "./components/TitleBar";

function App() {
  const [todos, setTodos] = useState<todosT[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">("all");

  return <Layout>
    <Title />
    <InputBar 
          setFilter={setFilter}
          todos={todos} 
          setTodos={setTodos} 
    />
    <RenderTodos 
          todos={todos} 
          setTodos={setTodos} 
          filter={filter}
    />
  </Layout>
}

export default App
