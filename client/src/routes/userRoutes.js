const express = require("express")
const router = express.Router()

const controller = require("../controllers/userController")

router.get("/all", controller.getAll)
router.post("/create", controller.createUser)
//No postman testar rota com ID do usiário que deseja atualizar
router.patch("/update/:id", controller.updateUser);
//Delete
router.delete("/delete/:id", controller.deleteUser);

module.exports = router
