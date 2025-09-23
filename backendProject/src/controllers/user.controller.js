import ayncHandler from "../utils/ayncHandler.js"

const registerUser = ayncHandler(async (req , res) => {
    res.status(200).json({
        message : "ok",
    })
})

export default registerUser