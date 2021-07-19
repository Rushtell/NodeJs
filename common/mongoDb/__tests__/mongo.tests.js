import {connectToDb} from "../mongo";

jest.mock('mongoose', () => {
    return {
        connect: jest.fn(() => {
            return Promise.resolve('connect')
        })
    }
})

test('Should connect to db', async () => {
    // let expected;
    // await connectToDb().then(() => {
    //     expected = 'connected';
    // }).catch(() => {
    //     expected = 'not connected';
    // })
    // expect(expected).toBe('connected');
    const result = await connectToDb()
    expect(result).toBe('connect')
})