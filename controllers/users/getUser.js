import userDb from "../../models/user-db.js"

export const getUser = async (req) => {
    return await userDb.findById(req.params.id)
}