database diagram 8 tables

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
