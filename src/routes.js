const { Router } = require('express');
const NewsletterController = require('./controllers/NewsletterController')

const routes = Router();

routes.get('/newsletter', NewsletterController.index);
routes.get('/newsletter/:id', NewsletterController.show);
routes.post('/newsletter', NewsletterController.store);
routes.put('/newsletter/:id', NewsletterController.update)

module.exports = routes;