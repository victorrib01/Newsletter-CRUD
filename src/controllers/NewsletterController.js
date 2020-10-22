const Newsletter = require('../models/Newsletter');

module.exports = {
    async index(req,res){
        const newsletters = await Newsletter.find();

        return res.json(newsletters)
    },
    async store(req, res) {
        const {estabelishment_category, message} = req.body;
    
        const newsletter = await Newsletter.create({
            estabelishment_category,
            message,
        })
    
        return res.json(newsletter);
    },
    async show(req, res) {
        const { id } = req.params;

        const newsletter = await Newsletter.findById({_id: id})

        return res.json(newsletter);
    },
    async update(req,res) {
        const { id } = req.params;

        const newsletter = await Newsletter.findByIdAndUpdate(id, 
        )

        return res.json(newsletter);
    }
}