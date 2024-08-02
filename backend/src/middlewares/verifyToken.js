import 'dotenv/config';
import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(401).send({message: 'unAuthorized access'})
    }
    const token = req.headers.token.split(' ')[1]
    try {
        const decoded = await jwt.verify(token, '0270e3c1935f3411231a0ad19c8447a878196c6786b0ae18ad03161c799d9b0c')
        req.user= decoded
        next()
    } catch (error) {
        return res.status(401).send({ message: "unauthorized access" });
    }
};

export default verifyToken
