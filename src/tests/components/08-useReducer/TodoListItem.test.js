import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';

describe('Pruebas en <TodoListItem />',()=> {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const todo = demoTodos[0];
    todo.done = true;

    
    const wrapper = shallow( 
        <TodoListItem 
            todo = { todo }
            index = { 0 }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        /> );


    
    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe llamar la función handleDelete', () => {
        const deleteButton = wrapper.find('button');
        deleteButton.props().onClick();
       
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('debe llamar la función handleToggle', () => {
        const toggleButton = wrapper.find('p');
        toggleButton.props().onClick();
       
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });


    test('debe mostrar el texto correctamente', () => {
        const parrafo = wrapper.find('p');

        expect(parrafo.exists()).toBe(true);
        expect(parrafo.text().trim()).toBe('1.' + demoTodos[0].desc)

    });
    
    test('debe tener la clase "complete" si TODO.done = true ', () => {
        const parrafo = wrapper.find('.complete');

        expect(parrafo.exists()).toBe(true);
        
        //El párrafo debe tener la clase 'compete'
        expect(parrafo.hasClass('complete')).toBe(true);
    })
    
    
    
    

})