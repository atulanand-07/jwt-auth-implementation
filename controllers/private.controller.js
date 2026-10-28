export const userPrivate = async(req, res) => {
    res.status(200).json({
        message:"Welcome to Private Routes",
        user:req.user
    })
}