const Match_Schema = require('../model/match_model')

const searchMatches = async (req, res) => {
    const str = req.params.str
    try {
        const searchedMatches = await Match_Schema.find(
            {$or: [
                {name: {$regex: str, $options: 'i'}},
                {location: {$regex: str, $options: 'i'}}
            ]},
            {_id: true, isCompleted: true}
        )
        res.status(200).json(searchedMatches.filter(match => match.isCompleted))
    } catch (err) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = searchMatches