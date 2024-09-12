import express from 'express'
import { create, deleteUser, getall, getone, update } from '../controllers/user.controller.js';
const route = express.Router();
route.post('/create',create)
route.get('/getall',getall)
route.get('/getone/:id',getone)
route.put('/update/:id',update)
route.delete('/delete/:id',deleteUser)
export default route;