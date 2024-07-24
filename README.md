BACKEND STACK

REST API
http://localhost:5000/api/brands (create, getAll, getOne, update, delete) (create if role ADMIN)
http://localhost:5000/api/types (create, getAll, getOne, update, delete) (create if role ADMIN)
http://localhost:5000/api/products (create, getAll, getOne, delete) update dont work
http://localhost:5000/api/users (/registration /login /auth)

1. Node js
2. Express
3. Postgree SQL
4. Sequelize - ORM for Database

What do we do?

1. Build a database diagram consisting of 8 tables +
2. Full online store REST API +
3. User authorization using JWT token +

Database diagram 8 tables

1. user
   id
   email
   password
   role STRING
2. rating
   id
   user_id
   device_id
   rate
3. basket
   id
   user_id
4. device
   id
   name
   price
   rating
   img
   typeId
   brandId
5. device_info
   id
   device_id
   title
   description
6. type
   id
   name
7. brand
   id
   name
8. basket_device
   id
   device_id
   basket_id
