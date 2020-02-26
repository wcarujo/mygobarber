import jwt from 'jsonwebtoken';

// transforma uma função callback em async/await
import { promisify } from 'util';

import authConfig from '../../config/authConfig';
import { decode } from 'punycode';

// verifica autenticação - se o token está válido
export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // console.log(authHeader);
    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided - auth.js'})
    }

    // recupera bearer e token
    // messageToken = [ 'Bearer', 'token]
    // const messageToken = authHeader.split(' ');
    
    // para não usar o Bearer basta criar um array ignorando a primeira posição
    const [, token] = authHeader.split(' ');

    //
    try {
        //informações do token
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        
        req.userId = decoded.id;
        
        return next();

    } catch (err) {
        return res.status(401).json({ error: 'token invalid' });
    }
    
};