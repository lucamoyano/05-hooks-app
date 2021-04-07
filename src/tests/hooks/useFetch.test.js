import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from '../../hooks/useFetch';
 
describe('Pruebas en useFetch',()=> {

    test('debe retornar la información por defecto', () => {
        
        const { result } = renderHook(()=> useFetch(`https://breakingbadapi.com/api/quotes/1`));

        const { data, loading, error } = result.current;
        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error).toBe(null);

    });
    
    test('debe tener la info deseada', async () => {
        
        const { result, waitForNextUpdate } = renderHook(()=> useFetch(`https://breakingbadapi.com/api/quotes/1`));

        const { data, loading, error } = result.current;
        await waitForNextUpdate({timeout:2000});

    
        expect(result.current.data.length).toBe(1);
        //expect(loading).toBe(false);
        expect(result.current.loading).toBe(false);
        expect(error).toBe(null);

    });

    test('debe manejar el error', async () => {
        
        const { result, waitForNextUpdate } = renderHook(()=> useFetch(`https://reqres.in/apid/users?page=2`));

        const { data, loading, error } = result.current;
        await waitForNextUpdate({timeout:2000});

        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( result.current.error ).toBe('No se pudo cargar la info');
        //expect( error ).toBe(null);

    });

});