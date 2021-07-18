import {
    createNoteByCustomer,
    deleteNoteByCustomer, getNoteByCustomerId,
    getNotesByCustomerId,
    updateNoteByCustomer
} from "../services/note.service";

export function createNote (req, res, next) {
    const {customerId} = req.params;
    return createNoteByCustomer(customerId, req.body).then(result => {
        res.json(result);
    }).catch(next);
}

export function getNotes (req, res, next) {
    const {customerId} = req.params;
    return getNotesByCustomerId(customerId).then(result => {
        res.json(result);
    }).catch(next);
}

export function getNote (req, res, next) {
    const {customerId} = req.params;
    const {noteId} = req.params;
    return getNoteByCustomerId(customerId, noteId).then(result => {
        res.json(result);
    }).catch(next);
}

export function updateNote (req, res, next) {
    const {customerId} = req.params;
    const {noteId} = req.params;
    return updateNoteByCustomer(customerId, noteId, req.body).then(result => {
        res.json(result);
    }).catch(next);
}

export function deleteNote (req, res, next) {
    const {customerId} = req.params;
    const {noteId} = req.params;
    return deleteNoteByCustomer(customerId, noteId).then(result => {
        res.json(result);
    }).catch(next);
}