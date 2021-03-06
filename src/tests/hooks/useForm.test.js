import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', ()=> {

    const initialForm = {
        name: 'Lucas',
        email: 'lucanmoyano@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
       const { result } = renderHook(()=> useForm(initialForm) );
       const [ formValues, handleInputChange, reset ] = result.current;
       
       expect(formValues).toEqual(initialForm);
       expect(typeof handleInputChange).toBe('function');
       expect(typeof reset).toBe('function');
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(()=> useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act(()=> handleInputChange({target: {name: 'name', value:'Goku'}}));
        
        const [ values ] = result.current;
        expect(values.name).toBe('Goku');
        expect( values ).toEqual({ ...initialForm, name:'Goku' })
    });
    
    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook(()=> useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act(()=> { handleInputChange({target: {name: 'name', value:'Goku'}}) ;
            reset();});
        
        const [ values ] = result.current;
        expect(values).toEqual({ ...initialForm, name:'Lucas' });
    });
    

});