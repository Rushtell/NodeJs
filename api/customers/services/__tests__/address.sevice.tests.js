import {
    createAddressByCustomer, deleteAddressByCustomer,
    getAddressByCustomerId,
    getAddressesByCustomerId,
    updateAddressByCustomer
} from "../address.service";
const mockingoose = require('mockingoose');
import {Customer} from "../../models/customer.model";


describe('Test address service', () => {
    test('Test method getAddresses', async () => {
        // const mockQuery = {
        //     select: jest.fn((selectFields) => {
        //         expect(selectFields).toBe('Addresses')
        //         return Promise.resolve({Addresses: [{}]})
        //     })
        // }
        // Customer.findOne = jest.fn((query) => {
        //     expect(query._id).toBe('123')
        //     return mockQuery;
        // })
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({_id: '123'})
            return new Customer ({Addresses: [{}]})
        }, 'findOne')


        const addresses = await getAddressesByCustomerId('123')
        expect(addresses.length).toBe(1);
    })
    test('Test method createAddressByCustomer', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({_id: '123'})
            return {updated: 1}
        }, 'updateOne')


        const result = await createAddressByCustomer('123')
        expect(result.updated).toBe(1);
    })
    test('Test method getAddressByCustomerId', async () => {
        const mockQuery2 = {
            then: jest.fn(() => {
                return Promise.resolve({AddressLine: 'testLine'})
            })
        }
        const mockQuery = {
            select: jest.fn((selectFields) => {
                expect(selectFields).toBe('Addresses')
                return mockQuery2;
            })
        }
        Customer.findOne = jest.fn((query) => {
            expect(query._id).toBe('123')
            return mockQuery;
        })

        const address = await getAddressByCustomerId('123', 321)
        expect(address.AddressLine).toBe('testLine');
    })
    test('Test method updateAddressByCustomer', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toMatchSnapshot('findById query')
            return {updated: 1}
        }, 'updateOne')


        const result = await updateAddressByCustomer('123', '321', {_id: '456'})
        expect(result.updated).toBe(1);
    })
    test('Test method deleteAddressByCustomer', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toMatchSnapshot('findById query')
            return {updated: 1}
        }, 'updateOne')


        const result = await deleteAddressByCustomer('123', '321')
        expect(result.updated).toBe(1);
    })
})