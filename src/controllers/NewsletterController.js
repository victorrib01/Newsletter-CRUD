const Newsletter = require('../models/Newsletter');

module.exports = {
    async index(req,res){
        const newsletters = await Newsletter.find();

        return res.json(newsletters)
    },
    async store(req, res) {
        const {estabelishment_category, message, title, name} = req.body;
    
        const newsletter = await Newsletter.create({
            estabelishment_category,
            message,
            title,
            name
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

        const { name, estabelishment_category, message, title } = req.query;
        
        // console.log(estabelishment_category)
        // console.log(message)
        const newsletter = await Newsletter.findByIdAndUpdate({_id: id}, {
            estabelishment_category, message, title , name
        }
        )

        return res.json(newsletter);
    },
    async delete(req, res) {
        const { id } = req.params;

        const newsletter = await Newsletter.findByIdAndDelete({_id: id});

        return res.json(newsletter)
    }
}