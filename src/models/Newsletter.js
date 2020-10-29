const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    establishmentName: String,
    establishmentCategory: String,
    title: String,
    message: String,
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);