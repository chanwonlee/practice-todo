import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useReducer, useRef} from "react";
import {reducer, mockData} from "./components/AppUtils.jsx";

function App() {
  const [todos, dispatcher] = useReducer(reducer, mockData);
  const index = useRef(4);

  const onCreate = (content) => {
    dispatcher({
      type: "CREATE",
      data: {
        id: index.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  };

  const onUpdate = (targetId) => {
    dispatcher({
      type: "UPDATE",
      data: targetId
    })
  }

  const onDelete = (targetId) => {
    dispatcher({
      type: "DELETE",
      data: targetId
    })
  }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
