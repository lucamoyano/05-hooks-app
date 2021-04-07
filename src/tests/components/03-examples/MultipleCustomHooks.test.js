import { shallow }  from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch'); //Simular llamado a funcion en componente
jest.mock('../../../hooks/useCounter'); 


describe('Pruebas en <MultipleCustomHooks />',()=> {
    
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    });
    
    test('debe de mostrarse correctmente', () => {

        //Valor por defecto del useFetch
        useFetch.mockReturnValue({
            data:null,
            loading:false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data:[{
                author: 'Lucas',
                quote: 'Hola mundo'
            }],
            loading:false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.alert').exists()).toBe(false);

    });
    
    

})