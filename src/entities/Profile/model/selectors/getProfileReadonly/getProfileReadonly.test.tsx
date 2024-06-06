import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';


describe('getProfileReadonly.test', () => {
    test('should work with filled state', () => {


        const state: DeepPartial<StateSchema> = {
            profile: { 
            readonly: true
            }, 
        };
    
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
