import {Customer} from "../models/customer.model";

export function createNoteByCustomer(id, body) {
    console.log(body);
    return Customer.updateOne(
        { _id: id },
        {$push: {Notes: body}},
        { runValidators: true }
    )
}

export function getNotesByCustomerId (id) {
    return Customer.findOne({_id: id}).select("Notes").then(result => {
        return result.Notes
    })
}

export function getNoteByCustomerId (customerId, noteId) {
    return Customer.findOne({_id: customerId}).select('Notes').then(result => {
        return result.Notes.find(e => e._id == noteId)
    })
}

export function updateNoteByCustomer(idCustomer, idNote, body) {
    console.log(body);
    return Customer.updateOne(
        { _id: idCustomer, "Notes._id": idNote },
        {$set: {"Notes.$": body}},
        { runValidators: true }
    )
}

export function deleteNoteByCustomer(idCustomer, idNote) {
    return Customer.updateOne(
        { _id: idCustomer },
        {$pull: {Notes:{_id: idNote}}},
        { runValidators: true }
    )
}