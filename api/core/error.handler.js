

export function errorHandler (error, req, res, next) {
    if (error){
        switch (error.name){
            case 'ValidationError':
                return res.status(400).json({message: error.message});
            case 'NotFoundError':
                return res.status(404).json({message: error.message || 'NotFound'});
            default:
                return res.status(500).json({message: 'Server error'});
        }
    }
    next();
}