import React from "react";

const TodosBody = ({ todos }) => {

  return <>
    { todos.map((todo, todoKey) => <tr key={todoKey}> <TodosRow todoObj={todo}/></tr>) }
  </>
}

const TodosRow = ({todoObj}) => {
  const values = Object.values(todoObj);
  return <>{values.map((val, valIdx) => <th key={valIdx}>{val}</th>)}</>
}

export default TodosBody;