import { getQueryParams } from './addQeryParams';

describe('shared/url/addQeryParams', () => {
    test('test witch one param', () => {
        const params = getQueryParams({
            test: 'value',
        });

        expect(params).toBe('?test=value');
    });
    test('test witch multiple param', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        });

        expect(params).toBe('?test=value&second=2');
    });
    test('test witch undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });

        expect(params).toBe('?test=value');
    });
});
