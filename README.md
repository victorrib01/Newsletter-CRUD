# FIAP-Vitrine-Newsletter-CRUD
# REST-API

How to use:

- npm run dev
- yarn dev


Routes:

- GET:    /newsletter        - Return all data from database.
         /newsletter/{id}   - Return a specific newsletter from database using ID as parameter.

- POST:   /newsletter        - Create a new newsletter. | body{ name: String, estabelishment_category: String, title: String, message: String }

- DELETE: /newsletter/{id}   - Delete a specific newsletter from database using ID as parameter.

- PUT:    /newsletter/{id}   - Update a specific newsletter from database using ID as parameter and
                          Query for body{ name: String, estabelishment_category: String, title: String, message: String }
