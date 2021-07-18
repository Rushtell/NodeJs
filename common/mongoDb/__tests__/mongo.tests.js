import {connectToDb} from "../mongo";

test('Should connect to db', async () => {
    let expected;
    await connectToDb().then(() => {
        expected = 'connected';
    }).catch(() => {
        expected = 'not connected';
    })
    expect(expected).toBe('connected');
})