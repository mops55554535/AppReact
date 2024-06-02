import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '1212121',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('1212121');
    });
    test('should return error ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
