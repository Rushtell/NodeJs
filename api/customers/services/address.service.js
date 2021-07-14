import {Customer} from "../models/customer.model";

export function createAddressByCustomer(id, body) {
    console.log(body);
    return Customer.updateOne(
        { _id: id },
        {$push: {Addresses: body}},
        { runValidators: true }
    )
}

export function getAddressesByCustomerId (id) {
    return Customer.find({_id: id}).select("Addresses");
}

export function updateAddressByCustomer(idCustomer, idAddress, body) {
    console.log(body);
    return Customer.updateOne(
        { _id: idCustomer, "Addresses._id": idAddress },
        {$set: {"Addresses.$": body}},
        { runValidators: true }
    )
}

export function deleteAddressByCustomer(idCustomer, idAddress) {
    return Customer.updateOne(
        { _id: idCustomer },
        {$pull: {Addresses:{_id: idAddress}}},
        { runValidators: true }
    )
}

