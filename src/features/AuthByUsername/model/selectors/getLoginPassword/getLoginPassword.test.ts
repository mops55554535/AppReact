import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1212121',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('1212121');
    });
    test('should return error ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
