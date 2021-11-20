const router = require('express').Router()
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken')

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;