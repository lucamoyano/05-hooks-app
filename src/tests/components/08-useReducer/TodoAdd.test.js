import { shallow } from 'enzyme';

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', ()=> {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd handleAddTodo = { handleAddTodo }  
        /> 
    )

    test('debe mostrar el componente correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('no debe llamar el handleAddTodo', () => {
        //Obtener funcion submit del form
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit( { preventDefault(){} });

        //Veces que se llama la función
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });

    test('debe llamar la funcion handleAddTodo', () => {
        const value = 'Aprender React';
        const input = wrapper.find('input');
        
        input.props().onChange({
            target: { 
                value,
                name: 'description'
            }
        });
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit( { preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        //Comprobar que luego del agregar el objeto, la descripción quede vacia (función reset)
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    

    
    
    
    
})