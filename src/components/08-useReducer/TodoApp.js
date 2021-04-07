import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';


import '../../index.css';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender react',
//     done: false
// }]

const init = () => {
    //Obtengo los 'todos' guardados en localStorage
    //En caso que triga null, retorno un arreglo vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
    
    // return[{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }]
}

export const TodoApp = () => {

    //function init en useReducer. 
    //Esta funcion es la va ayudar a React a computar todo mas rapido. 
    //y esa funcion (todoReducer) no se este ejecutando cada vez que hay cambio
    //const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //Cuando los 'todos' cambian se ejecuta el useEffect y se graban el localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])


    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        //Le mandamos la funcion al dispatch del useReducer
        dispatch(action);
    };

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    };

    const handleAddTodo = ( newTodo ) => {

        const action = {
            type: 'add',
            payload: newTodo
        }

        //Le mandamos la funcion al dispatch del useReducer
        dispatch(action);
    };


    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                </div>
                
                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>
                   

            </div>

        </div>
    )
}
