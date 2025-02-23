# RestAPIBasics
Create a REST API with GET &amp; POST , PUT , DELETE routes. 


Tech Stack : Node, Express
Basic API Handling , Middleware , HTTP methods


# Add a user

curl -X POST http://localhost:3005/users -H "Content-Type: application/json" -d '{"name": "Shubhanshu"}'


# Get all users

curl http://localhost:3005/users


🔄 Modifications:
Logging Middleware: Log incoming requests.

Validation Middleware: Ensure request body has necessary fields.

Update & Delete Users: Add PUT & DELETE routes.

Persist Data: Save users to a file.



# Update a user
curl -X PUT http://localhost:3005/users/1 -H "Content-Type: application/json" -d '{"name": "Praveen"}'

# Delete a user
curl -X DELETE http://localhost:3005/users/1
