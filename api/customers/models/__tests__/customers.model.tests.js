import {Customer} from "../customer.model";

describe('Test model customer', () => {
    test('Test model', () => {
        const customer = new Customer({
            FirstName: '123',
            LastName: '321'
        })

        expect(customer.FirstName).toBe('123')
    })
})