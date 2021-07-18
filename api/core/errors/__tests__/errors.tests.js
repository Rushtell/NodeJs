import {NotFoundError} from "../notFoundError";

describe('Tests custom errors', () => {
    test('Test notFoundError', () => {
        const error = new NotFoundError('123');

        expect(error.name).toBe('NotFoundError')
        expect(error.message).toBe('123')
    })
})