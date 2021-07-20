import {createAddress, deleteAddress, getAddress, getAddresses, updateAddress} from "../address.controller";

jest.mock('../../services/address.service', () => {
    return {
        getAddressesByCustomerId: jest.fn((id) => {
            return Promise.resolve({id})
        }),
        createAddressByCustomer: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        getAddressByCustomerId: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        updateAddressByCustomer: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        deleteAddressByCustomer: jest.fn((...params) => {
            return Promise.resolve(params)
        })
    }
})

describe('Test address controller', () => {
    test('Test createAddress method', async () => {
        const req = {
            query: {},
            body: {name: '321'},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await createAddress(req, res, next)
        expect(res.json).toBeCalledWith(['123', {name: '321'}])
        //expect(result).toMatchSnapshot('createResult')
    })
    test('Test getAddresses method', async () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getAddresses(req, res, next)
        expect(res.json).toBeCalledWith({'id': '123'})
    })
    test('Test getAddress method', async () => {
        const req = {
            query: {},
            params: {customerId: '123', addressId: '321'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getAddress(req, res, next)
        expect(res.json).toBeCalledWith(['123', '321'])
    })
    test('Test updateAddress method', async () => {
        const req = {
            query: {},
            params: {customerId: '123', addressId: '321'},
            body: {name: 'test'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await updateAddress(req, res, next)
        expect(res.json).toBeCalledWith(['123', '321', {name: 'test'}])
    })
    test('Test deleteAddress method', async () => {
        const req = {
            query: {},
            params: {customerId: '123', addressId: '321'},
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await deleteAddress(req, res, next)
        expect(res.json).toBeCalledWith(['123', '321'])
    })
})