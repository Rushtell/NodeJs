import {Customer} from "../models/customer.model";

export function getCustomersFromDb () {
    return Customer.find({})
}

export function getCustomerFromDb (id) {
    return Customer.findOne({_id: id})
}

export function insertCustomerIntoDb (body) {
    // const newCustomer = new Customer (body);
    // return newCustomer.save()
    return Customer.create(body);
}

export function deleteCustomerFromDb (id) {
    return Customer.deleteOne(
        {_id: id},
        { runValidators: true }
    )
}

export function updateCustomerIntoDb (id, body) {
    console.log(body)
    return Customer.updateOne(
        { _id: id },
        {$set: body},
        { runValidators: true }
    )
}

