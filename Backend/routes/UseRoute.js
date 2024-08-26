import express from 'express'
import {loginUser,registerUser} from '../controller/UserController.js'

const UserRouter = express.Router();


UserRouter.post('/register',registerUser)
UserRouter.post('/login',loginUser)

export default UserRouter;