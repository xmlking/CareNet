MongoDB
=======
Setup MongoDB 

### Install MongoDB

```bash
brew install mongodb
```

### Start MongoDB

> Comment out `security:authorization: enabled` in `mongod.yml` if you are doing these steps first time.

```bash
cd mongodb
mongod -f ./mongod.yml
```

### Secure MongoDB

Create an admin user

```bash
# in a new terminal, open `mongo` shell and switch to the `admin` database
mongo
use admin
# Create the “admin” user
db.createUser(
   {
     user: "admin",
     pwd: "admin123",
     roles: [ { role: "userAdminAnyDatabase", db: "admin" }]
   }
)
```

Enable authentication in the `mongod.yml` file

```yml
security:
	authorization: enabled
```

Stop running running `mongod` in terminal one, and restart it

```bash
mongod -f ./mongod.yml
```

Now switch to `carenet` database and create app owner user.

```bash
# Open your `mongo` shell and switch to the `carenet` database
mongo --port 27017 -u "admin" -p "admin123" --authenticationDatabase "admin"
use carenet
# Create the “grails” user
db.createUser(
   {
     user: "grails",
     pwd: "grails123",
     roles: [ { role: "dbOwner", db: "carenet" } ]
   }
)
show users
```
 
Now check that everything went fine with the auth function.

```bash
# Open your `mongo` shell and switch to the `carenet` database
mongo --port 27017 -u "grails" -p "grails123" --authenticationDatabase "carenet"
use carenet
show collections
db.foo.insert( { x: 1, y: 1 } )
show collections
```
 


### References:
1. https://medium.com/@matteocontrini/how-to-setup-auth-in-mongodb-3-0-properly-86b60aeef7e8