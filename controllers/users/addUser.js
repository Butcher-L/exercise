import userDb from "../../models/user-db.js"
import { validateRequestBody } from '../../validations/users.js'
import { generateUniqueId } from '../../middlewares/generateUniqueId.js'
import { Enum } from '../../enum.js'
import { encrypt } from '../../middlewares/encrypt.js'

export const registerUser = async (req) => {
    const body = req.body
    const validate = validateRequestBody(body)

    if(!validate.isValid){
        throw new Error(`Required fields are missing: ${validate.missingFields.join(', ')}`)
    }

    const userExist = await userDb.findOne({
        userName: body.userName,
    })

    if(userExist){
        throw new Error("User already exists")
    }

    return await userDb.create({
        ...body,
        _id: generateUniqueId(Enum.USER),
        password: encrypt(body.password),
        dateTimeCreated: Date.now(),
        dateTimeUpdated: Date.now()
    })
}