const Account_Schema = require('../model/account_model')

const searchAccounts = async (req, res) => {
    const str = req.params.str
    try {
        const searchedAccounts = await Account_Schema.find(
            {showName: {
                $regex: str,
                $options: 'i'
            }},
            {_id: true, showName: true}
        )
        res.status(200).json(searchedAccounts)
    } catch (err) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = searchAccounts