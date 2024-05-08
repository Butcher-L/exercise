import userDb from "../../models/user-db.js"
import { validateRequestBodyLogin } from '../../validations/users.js'
import { encrypt } from "../../middlewares/encrypt.js"
import { generateToken } from "../../middlewares/jwt.js"

export const login = async (req) => {
    const body = req.body
    const validate = validateRequestBodyLogin(body)

    if(!validate.isValid){
        throw new Error(`Required fields are missing: ${validate.missingFields.join(', ')}`)
    }
    const userExist = await userDb.findOne({
        userName: body.userName,
    })
    if(!userExist){
        throw new Error("'User does not exits")
    }

    const user = await userDb.findOne({
        userName: body.userName,
        password: encrypt(body.password)
    })

    if(!user){
        return{
            error: "Invalid Credentials",
        }
    }

    const token = generateToken(user)

    return {
        message : 'Login successful',
        token: token,
    }
}