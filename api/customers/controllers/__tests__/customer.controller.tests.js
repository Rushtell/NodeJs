import {createCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer} from "../customer.controller";

jest.mock('../../services/customer.service', () => {
    return {
        getCustomersFromDb: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        getCustomerFromDb: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        insertCustomerIntoDb: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        deleteCustomerFromDb: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        updateCustomerIntoDb: jest.fn((params) => {
            return Promise.resolve(params)
        })
    }
})

describe('Test customer controller', () => {
    test('Test createCustomer method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = createCustomer(req, res , next)
        expect(result).toMatchSnapshot('createResult')
    })
    test('Test getCustomers method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = getCustomers(req, res , next)
        expect(result).toMatchSnapshot('getAllResult')
    })
    test('Test getCustomer method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = getCustomer(req, res , next)
        expect(result).toMatchSnapshot('getOneResult')
    })
    test('Test updateCustomer method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = updateCustomer(req, res , next)
        expect(result).toMatchSnapshot('updateResult')
    })
    test('Test deleteCustomer method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = deleteCustomer(req, res , next)
        expect(result).toMatchSnapshot('deleteResult')
    })
})