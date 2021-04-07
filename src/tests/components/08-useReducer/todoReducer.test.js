import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en todoReducer', ()=> {

    test('debe retornar el estado por defecto', () => {

        const state = todoReducer( demoTodos, {});
        expect( state ).toEqual( demoTodos );

    });

    test('debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Prueba add',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer( demoTodos, action);
        
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo] );
        
    });

    test('debe de elminar un TODO', () => {
        const id = 1;

        const action = {
            type: 'delete',
            payload: id
        }

        const state = todoReducer( demoTodos, action);
        
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[1] ] );
        
    });

    test('debe hacer toogle un TODO', () => {
        const id = 1;

        const action = {
            type: 'toggle',
            payload: id
        }

        const state = todoReducer( demoTodos, action );
        
        expect( state[0].done ).toEqual( true );
        expect( state[1] ).toEqual( demoTodos[1] );
        
    });


    
})