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
    return Customer.findOne({_id: id}).select("Addresses").then(result => {
        return result.Addresses
    });
}

export function getAddressByCustomerId (customerId, addressId) {
    return Customer.findOne({_id: customerId}).select('Addresses').then(result => {
        return result.Addresses.find(e => e._id == addressId)
    })
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

