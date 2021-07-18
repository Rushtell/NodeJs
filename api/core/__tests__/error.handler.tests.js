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
    })
    test('Should return status 400', () => {
        const error = {
            name: 'ValidationError'
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
    })
})