import {getUsersList, getUserById} from '../services/user.service'

// const getUsersList = require('../services/user.service')

export function getUsers (req, res, next){
    const {
        search = '',
        skip = '0',
        limit = '100'
    } = req.query;

    const params = {
        search,
        skip: parseInt(skip, 10),
        limit: parseInt(limit, 10)
    }

    return getUsersList(params).then(result => {
        res.json(result);
    }).catch(next);
}

export function getUser (req, res, next) {
    const {userId} = req.params;
    return getUserById(userId).then(result => {
        res.json(result);
    }).catch(next);
}

export function setUser(req, res, next){
    const {userId} = req.params;
    return getUserById(userId).then(user => {
        req.user = user;
        return next();
    });
}