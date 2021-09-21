import React, {useState, useEffect/*, useReducer*/} from "react";
import TodosHeader from './TodosHeader';
import TodosBody from './TodosBody';
import './index.css';

// TODO: add flair, delay it a bit and use loader in downtime

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/';

const TodosList = ()  => {
  const [todos, setTodos] = useState([]);
  const [todoHeaders, setTodoHeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { 
      fetch(POSTS_URL)
        .then(res => res.json())
        .then(json =>  {
          setLoading(false);
          setTodos(json);

          const headers = Object.keys(json[0]).map(head => head.trim())
          setTodoHeaders(headers);
        })
    }, 3000);
    
  }, []);

  const handleHeaderClick = (ev) => {
    const headerName = ev.target.dataset.headerName.trim();
    const sortOrder = ev.target.dataset.order;
    let [aValue, bValue] = [NaN, NaN];

    [aValue, bValue] = 
      sortOrder === "ASC" ? [1, -1] : 
      sortOrder === "DESC" ? [-1, 1] : [NaN,NaN];

    setTodos(myTodos => [...myTodos].sort((a, b) => (a[headerName] > b[headerName]) ? aValue : bValue));
  };

  return (<>
    { loading && <Loader/> }

    <table>
      <thead>
        { todos.length > 0 && <TodosHeader headers={todoHeaders} onClickHandler={handleHeaderClick}/> }
      </thead>

      { todos.length > 0 && <TodosBody todos={todos}/> }
    </table>
  </>);
}

const Loader = () => {
  return <div className="loader-container ">
    <div className="loader"></div>
  </div>
}

export default TodosList;