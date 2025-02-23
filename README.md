# RestAPI
Create a REST API with GET &amp; POST , PUT , DELETE routes. 

Logging Middleware: Log incoming requests.
Validation Middleware: Ensure request body has necessary fields.
Persist Data: Save users to a file.

Tech Stack : Node, Express
Basic API Handling , Middleware , HTTP methods


# Add a user
curl -X POST http://localhost:3005/users -H "Content-Type: application/json" -d '{"name": "Shubhanshu"}'


# Get all users
curl http://localhost:3005/users



# Update a user
curl -X PUT http://localhost:3005/users/1 -H "Content-Type: application/json" -d '{"name": "Praveen"}'

# Delete a user
curl -X DELETE http://localhost:3005/users/1
