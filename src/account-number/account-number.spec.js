import formatAccountNumber from '.';
import { NON_BREAKING_SPACE } from '../internal/unicode';

describe('format account number', () => {
    test('returns input when account number is undefined', () => {
        expect(formatAccountNumber(undefined)).toBe(undefined);
    });

    test('returns input when account number is null', () => {
        expect(formatAccountNumber(null)).toBe(null);
    });

    test('returns input when account number is empty', () => {
        expect(formatAccountNumber('')).toBe('');
    });

    test('returns input when account number length is not 11', () => {
        expect(formatAccountNumber('1234567890')).toBe('1234567890');
    });

    test('formats account number correctly', () => {
        expect(formatAccountNumber('12345678901'))
            .toBe(`1234${NON_BREAKING_SPACE}56${NON_BREAKING_SPACE}78901`);
    });
});
