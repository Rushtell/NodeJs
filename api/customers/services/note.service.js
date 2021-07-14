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
    return Customer.find({_id: id}).select("Notes");
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