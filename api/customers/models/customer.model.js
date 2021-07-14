import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    LastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    PhoneNumber: {
        type: String,
        required: true,
        maxlength: 15,
        match: [/^\+[1-9]\d{1,14}$/, 'Invalid Phone Number']
    },
    Email: {
        type: String,
        required: true,
        maxlength: 50,
        match: [/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Invalid Email']
    },
    TotalPurchasesAmount: {
        type: Number,
        required: true
    },
    Addresses: [
        {
            AddressLine: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 100
            },
            SecondAddressLine: {
                type: String,
                required: false,
                minlength: 3,
                maxlength: 100
            },
            AddressType: {
                type: String,
                required: true,
                enum: ['Billing', 'Shipping']
            },
            City: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 50
            },
            PostalCode: {
                type: Number,
                required: true,
                minlength: 3,
                maxlength: 6
            },
            State: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 20
            },
            Country: {
                type: String,
                required: true,
                enum: ['United States', 'Canada']
            }
        }
    ],
    Notes: [
        {
            Text: {
                type: String,
                required: true,
                minlength: 1,
            }
        }
    ]
});

export const Customer = mongoose.model('Customer', customerSchema);