import {createCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer} from "../customer.controller";

jest.mock('../../services/customer.service', () => {
    return {
        getCustomersFromDb: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        getCustomerFromDb: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        insertCustomerIntoDb: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        deleteCustomerFromDb: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        updateCustomerIntoDb: jest.fn((...params) => {
            return Promise.resolve(params)
        })
    }
})

describe('Test customer controller', () => {
    test('Test createCustomer method', async () => {
        const req = {
            query: {},
            body: {name: 'test'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await createCustomer(req, res, next)
        expect(res.json).toBeCalledWith([{name: 'test'}])
    })
    test('Test getCustomers method', async () => {
        const req = {
            query: {},
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getCustomers(req, res, next)
        expect(res.json).toBeCalledWith([])
    })
    test('Test getCustomer method', async () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getCustomer(req, res, next)
        expect(res.json).toBeCalledWith(['123'])
    })
    test('Test updateCustomer method', async () => {
        const req = {
            query: {},
            params: {customerId: '123'},
            body: {name: 'test'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await updateCustomer(req, res, next)
        expect(res.json).toBeCalledWith(['123', {name: 'test'}])
    })
    test('Test deleteCustomer method', async () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await deleteCustomer(req, res, next)
        expect(res.json).toBeCalledWith(['123'])
    })
})