const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    name: String,
    estabelishment_category: String,
    title: String,
    message: String,
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);