import { Router } from 'express';
import { verifyToken } from '../../middlewares/jwt.js';

import { registerUser } from './addUser.js';
import { login } from './login.js';
import { getUsers } from './getUsers.js';
import { getUser } from './getUser.js';

const router = Router()

router.post('/register', verifyToken, async (req, res) => {
    try {
        const result = await registerUser(req);
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
});

router.post('/login', async (req, res) => {
    try {
        const result = await login(req);
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
});

router.get('/users', verifyToken, async (req, res) => {
    try {
        const result = await getUsers(req);
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
});

router.get('/user/:id', verifyToken, async (req, res) => {
    try {
        const result = await getUser(req);
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
});
 
export default router;