
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState , action) => {
    //Utilizar ? para indicarle que si action != undefined, utilice el type
    if( action?.type === 'agregar' ) 
        return [...state, action.payload];

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false,
}

//Es un estandar, type: es la acción
//payload: el nuevo objeto que quiero agregar, eliminar, etc
const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos);