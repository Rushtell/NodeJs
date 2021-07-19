import {
    deleteCustomerFromDb, getCustomerFromDb,
    getCustomersFromDb,
    insertCustomerIntoDb,
    updateCustomerIntoDb
} from "../services/customer.service";
import {NotFoundError} from "../../core/errors/notFoundError";

export function getCustomers (req, res, next) {
    return getCustomersFromDb().then(result => {
        res.json(result);
    }).catch(next);
}

export function getCustomer (req, res, next) {
    const {customerId} = req.params;
    return getCustomerFromDb(customerId).then(result => {
        if (result !== undefined) {
            return res.json(result);
        }
        throw new NotFoundError('Customer not found');
    }).catch(next);
}

export function createCustomer (req, res, next) {
    return insertCustomerIntoDb(req.body).then(result => {
        res.json(result);
    }).catch(next)
}

export function updateCustomer (req, res, next) {
    const {customerId} = req.params;
    return updateCustomerIntoDb(customerId, req.body).then(result => {
        res.json(result)
    }).catch(next);
}

export function deleteCustomer (req, res, next) {
    const {customerId} = req.params;
    return deleteCustomerFromDb(customerId).then(result => {
        res.json(result);
    }).catch(next);
}