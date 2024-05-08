import userDb from "../../models/user-db.js"

export const getUsers = async (req) => {
    try {
        const query = req.query
        const page = query.page ? query.page : 1
        const limit = query.limit ?  query.limit: 10
    
        const startIndex = (page - 1) * limit;

        const results = await userDb.find().skip(startIndex).limit(limit);

        const totalCount = await userDb.countDocuments();

        const totalPages = Math.ceil(totalCount / limit);

        const pagination = {
            currentPage: page,
            totalPages: totalPages,
            totalItems: totalCount,
        };

        return { results, pagination }; 
    } catch (error) {
        throw new Error('Pagination failed:', error);
    }
}