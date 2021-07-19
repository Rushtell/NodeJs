import {createNote, deleteNote, getNote, getNotes, updateNote} from "../note.controller";

jest.mock('../../services/note.service', () => {
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

describe('Test note controller', () => {
    test('Test createNote method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = createNote(req, res , next)
        expect(result).toMatchSnapshot('createResult')
    })
    test('Test getNotes method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = getNotes(req, res , next)
        expect(result).toMatchSnapshot('getAllResult')
    })
    test('Test getNote method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = getNote(req, res , next)
        expect(result).toMatchSnapshot('getOneResult')
    })
    test('Test updateNote method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = updateNote(req, res , next)
        expect(result).toMatchSnapshot('updateResult')
    })
    test('Test deleteNote method', () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        const result = deleteNote(req, res , next)
        expect(result).toMatchSnapshot('deleteResult')
    })
})