import {getOrganization} from "../services/organization.service";


export function getOrg (req, res, next){
    return getOrganization(req.user).then(result => {
        res.json(result);
    }).catch(next)
}