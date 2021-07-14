import {
    createAddressByCustomer,
    deleteAddressByCustomer,
    getAddressesByCustomerId,
    updateAddressByCustomer
} from "../services/address.service";

export function createAddress (req, res, next) {
    const {customerId} = req.params;
    return createAddressByCustomer(customerId, req.body).then(result => {
        res.json(result);
    }).catch(next);
}

export function getAddresses (req, res, next) {
    const {customerId} = req.params;
    return getAddressesByCustomerId(customerId).then(result => {
        res.json(result);
    }).catch(next);
}

export function updateAddress (req, res, next) {
    const {customerId} = req.params;
    const {addressId} = req.params;
    return updateAddressByCustomer(customerId, addressId, req.body).then(result => {
        res.json(result);
    }).catch(next);
}

export function deleteAddress (req, res, next) {
    const {customerId} = req.params;
    const {addressId} = req.params;
    return deleteAddressByCustomer(customerId, addressId).then(result => {
        res.json(result);
    }).catch(next);
}