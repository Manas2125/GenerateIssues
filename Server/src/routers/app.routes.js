import express from 'express';
import upload from '../middlewares/multerHandler.js';

import { UserCreate } from '../controllers/userCreate.Controller.js';
import { AdminCreate } from '../controllers/adminCreate.Controller.js';
import { CreateIssue } from '../controllers/issueCreate.Controller.js'; 
import { Login } from '../controllers/login.Controller.js';
import { GetAdminUsers } from '../controllers/getAdminUser.Controller.js';
import { GetIssueByAdmin } from '../controllers/getIssueByAdmin.Controller.js';
import { GetEmployee } from '../controllers/getEmployee.Controller.js';
import { DeleteEployee } from '../controllers/deleteEmployee.Controller.js';

const router = express.Router();

router.post('/userCreate', upload.fields([{ name: "EmployeeImage", maxCount: 1 }]), UserCreate);
router.post('/adminCreate', upload.fields([{ name: "AdminImage", maxCount: 1 }]), AdminCreate);
router.post('/createIssue', upload.fields([{ name: "IssueImage", maxCount: 1}]), CreateIssue);
router.get('/login', Login);
router.get('/getAllUsersUnderAdmin', GetAdminUsers);
router.get('/getEmployee', GetEmployee)
router.get('/getIssueByAdmin', GetIssueByAdmin)
router.delete('/deleteEmployee', DeleteEployee)

export default router;