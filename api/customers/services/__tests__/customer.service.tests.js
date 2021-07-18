import {
    deleteCustomerFromDb,
    getCustomerFromDb,
    getCustomersFromDb, insertCustomerIntoDb, updateCustomerIntoDb
} from "../customer.service";

jest.mock('../customer.service', () => {
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

describe('Test customer service', () => {
    test('Test method getCustomersFromDb', async () => {
        expect(await getCustomersFromDb('123')).toBe('123');
    })
    test('Test method getCustomerFromDb', async () => {
        expect(await getCustomerFromDb('123')).toBe('123');
    })
    test('Test method insertCustomerIntoDb', async () => {
        expect(await insertCustomerIntoDb('123')).toBe('123');
    })
    test('Test method deleteCustomerFromDb', async () => {
        expect(await deleteCustomerFromDb('123')).toBe('123');
    })
    test('Test method updateCustomerIntoDb', async () => {
        expect(await updateCustomerIntoDb('123')).toBe('123');
    })
})