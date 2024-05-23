import {Router} from 'express';

const userRoutes = Router();

userRoutes.get("/", getAllUsers)

export default userRoutes;