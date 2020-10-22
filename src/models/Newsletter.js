const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    estabelishment_category: String,
    message: String,
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);