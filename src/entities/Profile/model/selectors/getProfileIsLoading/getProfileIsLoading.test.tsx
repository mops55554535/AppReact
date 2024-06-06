import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';


describe('getProfileIsLoading.test', () => {
    test('should work with filled state', () => {


        const state: DeepPartial<StateSchema> = {
            profile: {
            isLoading: true
            }, 
        };
    
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
