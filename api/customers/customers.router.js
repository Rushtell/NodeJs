import express from "express";
import {
    createCustomer,
    deleteCustomer,
    getCustomer,
    getCustomers,
    updateCustomer
} from "./controllers/customer.controller";
import {
    createAddress,
    deleteAddress, getAddress,
    getAddresses,
    updateAddress
} from "./controllers/address.controller";
import {
    createNote,
    deleteNote, getNote,
    getNotes,
    updateNote
} from "./controllers/note.controller";

const router = express.Router();

// Customers req
router.get('/', getCustomers);
router.get('/:customerId', getCustomer);
router.post('/', createCustomer);
router.put('/:customerId', updateCustomer);
router.delete('/:customerId', deleteCustomer);

// Addresses req
router.get('/:customerId/addresses', getAddresses);
router.get('/:customerId/addresses/:addressId', getAddress);
router.post('/:customerId/addresses', createAddress);
router.put('/:customerId/addresses/:addressId', updateAddress);
router.delete('/:customerId/addresses/:addressId', deleteAddress);

// Notes req
router.get('/:customerId/notes', getNotes);
router.get('/:customerId/notes/:noteId', getNote);
router.post('/:customerId/notes', createNote);
router.put('/:customerId/notes/:noteId', updateNote);
router.delete('/:customerId/notes/:noteId', deleteNote);

export default router;