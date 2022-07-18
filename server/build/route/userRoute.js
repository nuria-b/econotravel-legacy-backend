"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controller/userController"));
var auth_1 = __importDefault(require("../middlewares/auth"));
var router = (0, express_1["default"])();
router.post('/user/register', auth_1["default"].encryptPassword, userController_1["default"].saveUser);
router.get('/user/all', userController_1["default"].getAllUsers);
exports["default"] = router;
/*router.post('/user',authHandler.encryptPassword,userController.saveUser);   router.get('/user',validateToken,userController.getAllUsers); */ 
