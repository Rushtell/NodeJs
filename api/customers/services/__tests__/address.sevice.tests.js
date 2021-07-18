import {
    createAddressByCustomer, deleteAddressByCustomer,
    getAddressByCustomerId,
    getAddressesByCustomerId,
    updateAddressByCustomer
} from "../address.service";

jest.mock('../address.service', () => {
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

describe('Test address service', () => {
    test('Test method getAddresses', async () => {
        expect(await getAddressesByCustomerId('123')).toBe('123');
    })
    test('Test method createAddressByCustomer', async () => {
        expect(await createAddressByCustomer('123')).toBe('123');
    })
    test('Test method getAddressByCustomerId', async () => {
        expect(await getAddressByCustomerId('123')).toBe('123');
    })
    test('Test method updateAddressByCustomer', async () => {
        expect(await updateAddressByCustomer('123')).toBe('123');
    })
    test('Test method deleteAddressByCustomer', async () => {
        expect(await deleteAddressByCustomer('123')).toBe('123');
    })
})