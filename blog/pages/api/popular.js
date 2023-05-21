//popular api
import data from "./data"

export default function Popular(req,res) {
    const {Popular} = data
    if(Popular) return res.status(200).json(Popular)
    res.status(404).json({error:"Data not Found"}) 
}