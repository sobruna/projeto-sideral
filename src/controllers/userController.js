const UserSchema = require("../models/userSchema")
bcrypt = require('bcrypt');

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
}

const createUser = async (req, res) => {

  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword
  try {
      const newUser = new UserSchema(req.body)

      const savedUser = await newUser.save()

      res.status(200).json({
          message: "User adicionado com sucesso!",
          savedUser
      })
  } catch (error) {
      res.status(500).json({
          message: error.message
      })
  }
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const {name, phone, email, password} = req.body
    
    const userUp = {
        name,
        phone, 
        email, 
        password 
    }
    

    try{
        const updateUser = await UserSchema.updateOne({_id: id}, userUp)
        
        //  if (updateUser.matchedCount===0){
        //      res.status(422).json({
        //          message: "Usuário não existe"
                
        //      })
            
        // }
        res.status(200).json({
            message: "Usuario atualizado com sucesso!",
            userUp
        })
        return
    } 
    catch (error){
        res.status(500).json({
            message: error.message
        })
    }
   
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const {name, phone, email, password} = req.body
    
    const userDelete = {
        name,
        phone, 
        email, 
        password 
    }
    

    try{
        const deleteUser = await UserSchema.deleteOne({_id: id}, userDelete)
        
        res.status(200).json({
            message: "Usuario removido com sucesso!",
            userDelete
        })
        return
    } 
    catch (error){
        res.status(500).json({
            message: error.message
        })
    }
   
}

module.exports = {getAll,createUser, updateUser, deleteUser}

module.exports = {
    getAll,
    createUser,
    updateUser,
    deleteUser
}
