import TextUtils from "../../Utils/TextUtils";

describe('Text utils', () => {

    describe('Capitalize', () => {
        const text = 'this is a test';

        test('should obtain a string', () => {
            const result = TextUtils.capitalize(text);

            expect(typeof result).toBe('string');
        });

        test('should obtain the same text with the first letter of each word in uppercase', () => {
            const result = TextUtils.capitalize(text);

            expect(result).toBe('This Is A Test');
        });

        test('should obtain an empty string', () => {
            const undefinedResult = TextUtils.capitalize();
            const emptyResult = TextUtils.capitalize('');

            expect(undefinedResult).toBe('');
            expect(emptyResult).toBe('');

        });
    });
});