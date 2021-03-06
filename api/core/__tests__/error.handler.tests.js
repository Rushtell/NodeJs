import {errorHandler} from "../error.handler";
import {NotFoundError} from "../errors/notFoundError";

describe('Tests error handler', () => {
    test('Should return status 404', () => {
        const error = new NotFoundError('123');
        const req = {
            query: {}
        };
        const res = {
            status: jest.fn(() => {
                return {
                    json: jest.fn((value) => {
                        return Promise.resolve({message: value})
                    })
                }
            }),

        };
        const next = jest.fn();
        errorHandler(error, req, res, next)
        expect(res.status).toBeCalledTimes(1)
    })
    test('Should return status 404 without message', () => {
        const error = new NotFoundError();
        const req = {
            query: {}
        };
        const res = {
            status: jest.fn(() => {
                return {
                    json: jest.fn(() => {
                        return Promise.resolve()
                    })
                }
            }),

        };
        const next = jest.fn();
        errorHandler(error, req, res, next)
        expect(res.status).toBeCalledTimes(1)
    })
    test('Should return status 400', async () => {
        const error = {
            name: 'ValidationError'
        }
        const req = {
            query: {}
        };
        const res = {
            status: jest.fn(() => {
                return {
                    json: jest.fn()
                }
            }),
        };

        const next = jest.fn();
        await errorHandler(error, req, res, next)
        expect(res.status).toBeCalledTimes(1)
    })
    test('Should return status 500', () => {
        const error = {
            name: 'Server error'
        }
        const req = {
            query: {}
        };
        const res = {
            status: jest.fn(() => {
                return {
                    json: jest.fn((value) => {
                        return Promise.resolve({message: value})
                    })
                }
            }),

        };
        const next = jest.fn();
        errorHandler(error, req, res, next)
        expect(res.status).toBeCalledTimes(1)
    })
    test('Should return next method without errors', () => {
        const req = {
            query: {}
        };
        const res = {
            status: jest.fn()
        }
        const next = jest.fn();
        errorHandler(undefined ,req, res, next)
        expect(next).toBeCalledTimes(1)
    })
})