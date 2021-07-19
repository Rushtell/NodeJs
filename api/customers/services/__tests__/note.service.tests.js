import {
    createNoteByCustomer, deleteNoteByCustomer, getNoteByCustomerId, getNotesByCustomerId, updateNoteByCustomer
} from "../note.service";
import {Customer} from "../../models/customer.model";
import {
    createAddressByCustomer, deleteAddressByCustomer,
    getAddressByCustomerId,
    getAddressesByCustomerId,
    updateAddressByCustomer
} from "../address.service";
const mockingoose = require('mockingoose');

describe('Test note service', () => {
    test('Test method getNotesByCustomerId', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({_id: '123'})
            return new Customer ({Notes: [{}]})
        }, 'findOne')


        const notes = await getNotesByCustomerId('123')
        expect(notes.length).toBe(1);
    })
    test('Test method createNoteByCustomer', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({_id: '123'})
            return {updated: 1}
        }, 'updateOne')


        const result = await createNoteByCustomer('123')
        expect(result.updated).toBe(1);
    })
    test('Test method getNoteByCustomerId', async () => {
        const mockQuery2 = {
            then: jest.fn(() => {
                return Promise.resolve({Text: 'testLine'})
            })
        }
        const mockQuery = {
            select: jest.fn((selectFields) => {
                expect(selectFields).toBe('Notes')
                return mockQuery2;
            })
        }
        Customer.findOne = jest.fn((query) => {
            expect(query._id).toBe('123')
            return mockQuery;
        })

        const note = await getNoteByCustomerId('123', 321)
        expect(note.Text).toBe('testLine');
    })
    test('Test method updateNoteByCustomer', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toMatchSnapshot('findById query')
            return {updated: 1}
        }, 'updateOne')

        const result = await updateNoteByCustomer('123', '321', {_id: '456'})
        expect(result.updated).toBe(1);
    })
    test('Test method deleteNoteByCustomer', async () => {
        mockingoose(Customer).toReturn((query) => {
            expect(query.getQuery()).toMatchSnapshot('findById query')
            return {updated: 1}
        }, 'updateOne')


        const result = await deleteNoteByCustomer('123', '321')
        expect(result.updated).toBe(1);
    })
})