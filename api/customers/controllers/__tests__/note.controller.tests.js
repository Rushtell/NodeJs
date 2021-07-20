import {createNote, deleteNote, getNote, getNotes, updateNote} from "../note.controller";

jest.mock('../../services/note.service', () => {
    return {
        createNoteByCustomer: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        getNotesByCustomerId: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        getNoteByCustomerId: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        updateNoteByCustomer: jest.fn((...params) => {
            return Promise.resolve(params)
        }),
        deleteNoteByCustomer: jest.fn((...params) => {
            return Promise.resolve(params)
        })
    }
})

describe('Test note controller', () => {
    test('Test createNote method', async () => {
        const req = {
            query: {},
            params: {customerId: '123'},
            body: {name: 'test'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await createNote(req, res, next)
        expect(res.json).toBeCalledWith(['123', {name: 'test'}])
    })
    test('Test getNotes method', async () => {
        const req = {
            query: {},
            params: {customerId: '123'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getNotes(req, res, next)
        expect(res.json).toBeCalledWith(['123'])
    })
    test('Test getNote method', async () => {
        const req = {
            query: {},
            params: {customerId: '123', noteId: '321'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getNote(req, res, next)
        expect(res.json).toBeCalledWith(['123', '321'])
    })
    test('Test updateNote method', async () => {
        const req = {
            query: {},
            params: {customerId: '123', noteId: '321'},
            body: {name: 'test'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await updateNote(req, res, next)
        expect(res.json).toBeCalledWith(['123', '321', {name: 'test'}])
    })
    test('Test deleteNote method', async () => {
        const req = {
            query: {},
            params: {customerId: '123', noteId: '321'},
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await deleteNote(req, res, next)
        expect(res.json).toBeCalledWith(['123', '321'])
    })
})