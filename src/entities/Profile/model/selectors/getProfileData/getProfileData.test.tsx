import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';


describe('getProfileData.test', () => {
    test('should return error', () => {

        const data ={
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data:data
            }, 
        };
    
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
