import {
    deleteCustomerFromDb,
    getCustomerFromDb,
    getCustomersFromDb, insertCustomerIntoDb, updateCustomerIntoDb
} from "../customer.service";
import {Customer} from "../../models/customer.model";
const mockingoose = require('mockingoose');


describe('Test customer service', () => {
    test('Test method getCustomersFromDb', async () => {
        mockingoose(Customer).toReturn((query) => {
            return [{}]
        }, 'find')

        const customers = await getCustomersFromDb()
        expect(customers.length).toBe(1);
    })
    test('Test method getCustomerFromDb', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({_id: '123'})

            return {FirstName: 'testName'}
        }, 'findOne')

        const customer = await getCustomerFromDb('123')
        expect(customer.FirstName).toBe('testName');
    })
    test('Test method insertCustomerIntoDb', async () => {
        const result = await insertCustomerIntoDb({
            FirstName: 'testName',
            LastName: 'testName',
            TotalPurchasesAmount: 100,
            Email: 'qwee@qwe.com',
            PhoneNumber: '+42355233'
        })
        expect(result['Addresses'].length).toBe(0);
    })
    test('Test method deleteCustomerFromDb', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({_id: '123'})
            return {deleted: 1}
        }, 'deleteOne')

        const result = await deleteCustomerFromDb('123')
        expect(result.deleted).toBe(1);
    })
    test('Test method updateCustomerIntoDb', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({_id: '123'})
            return {updated: 1}
        }, 'updateOne')


        const result = await updateCustomerIntoDb('123', {_id: '456'})
        expect(result.updated).toBe(1);
    })
})