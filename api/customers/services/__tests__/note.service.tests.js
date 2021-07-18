import {
    createNoteByCustomer, deleteNoteByCustomer, getNoteByCustomerId, getNotesByCustomerId, updateNoteByCustomer
} from "../note.service";

jest.mock('../note.service', () => {
    return {
        createNoteByCustomer: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        getNotesByCustomerId: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        getNoteByCustomerId: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        updateNoteByCustomer: jest.fn((params) => {
            return Promise.resolve(params)
        }),
        deleteNoteByCustomer: jest.fn((params) => {
            return Promise.resolve(params)
        })
    }
})

describe('Test note service', () => {
    test('Test method createNoteByCustomer', async () => {
        expect(await createNoteByCustomer('123')).toBe('123');
    })
    test('Test method getNotesByCustomerId', async () => {
        expect(await getNotesByCustomerId('123')).toBe('123');
    })
    test('Test method getNoteByCustomerId', async () => {
        expect(await getNoteByCustomerId('123')).toBe('123');
    })
    test('Test method updateNoteByCustomer', async () => {
        expect(await updateNoteByCustomer('123')).toBe('123');
    })
    test('Test method deleteNoteByCustomer', async () => {
        expect(await deleteNoteByCustomer('123')).toBe('123');
    })
})