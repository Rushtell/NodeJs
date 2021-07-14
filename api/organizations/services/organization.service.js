export function getOrganization (user) {
    return Promise.resolve({name: 'testOrganization', user: user})
}