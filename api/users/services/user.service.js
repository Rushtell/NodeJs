/**
 *
 * @param {{search?: string, skip?: number, limit?: number}} params
 */
export function getUsersList (params) {

    return Promise.resolve([]);
}

export function getUserById (userId) {

    return Promise.resolve([{id: userId, name: 'Alesha'}]);
}