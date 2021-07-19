import {createAddress, deleteAddress, getAddress, getAddresses, updateAddress} from "../address.controller";

jest.mock('../../services/address.service', () => {
    return {
        getAddressesByCustomerId: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        createAddressByCustomer: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        getAddressByCustomerId: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        updateAddressByCustomer: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        deleteAddressByCustomer: jest.fn((params) => {
            return Promise.resolve(params)
        })
    }
})

describe('Test address controller', () => {
    test('Test createAddress method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = createAddress(req, res , next)
        expect(result).toMatchSnapshot('createResult')
    })
    test('Test getAddresses method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = getAddresses(req, res , next)
        expect(result).toMatchSnapshot('getAllResult')
    })
    test('Test getAddress method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = getAddress(req, res , next)
        expect(result).toMatchSnapshot('getOneResult')
    })
    test('Test updateAddress method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = updateAddress(req, res , next)
        expect(result).toMatchSnapshot('updateResult')
    })
    test('Test deleteAddress method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = deleteAddress(req, res , next)
        expect(result).toMatchSnapshot('deleteResult')
    })
})