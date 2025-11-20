# DB Operations
## User
- __CREATE__ :  
id auto, deletion_date -> null, is_admin -> FALSE
Optionnal : avatar
- __(SOFT) DELETE__ :  
deletion_date -> now()
- __GET__
- __UPDATE__ :   
id, is_admin, deletion_date unchanged
itself OR admin (from list)
__LIST__ :  
Admins only
Lists all users

## Membership
- __CREATE__ :  
roles : 'host' 'cashier' 'guest'  
__host__ : Auto when user creates event  
__cashier__ : Created by host with user.email if user exists n not deleted  
__guest__ : Auto when user scan QR code  

- __DELETE__ :  
__all memberships__ : Auto when event is deleted  
__guest__ : When user : leave event / join another event
__cashier__ : By host (from list below)
- __LIST OF CASHIER__ :  
Host only
List of every cashier of an event

## Event
- __CREATE__ :  
id auto, is_active -> TRUE
Optionnal : image  
Auto : create membership 'host'  
- __DELETE__ :  
Delete all linked memberships  
(Soft) Delete all linked products (and event_id -> null)
- __GET__ :
- __UPDATE__ :
id unchanged
- __LIST__ :  
Only Admins
- __LIST OF USER EVENTS__ :  
All created and undeleted events of a user (host)  

## Product
- __CREATE__ :  
id auto, is_available -> TRUE, deletion_date -> null, link to event
category : dropdown among not deleted   
optionnal : picture, if not :   
Option 1 : picture = category.picture  
Options 2 : picture = null, in list if = null -> = category.picture

- __(SOFT) DELETE__ :  
deletion_date -> now()
- __GET__ :
- __UPDATE__ :  
id unchanges  
- __LIST FOR AN EVENT (all or by category)__ :
All undeleted products of an event

## Category
- __CREATE__ :  
Admins Only
id auto, deletion_date -> null
- __(SOFT) DELETE__ :  
deletion_date -> now()
- __GET__ :
- __UPDATE__ :
id unchanged
- __LABEL LIST__ :  
Lists only label of undeleted category (for dropdown menu)
- __LIST__ :  
Admins only
Lists all undeleted category


## VAT
- __CREATE__ :
Admins only
deletion date -> null
- __(SOFT) DELETE__ :  
deletion_date -> now()
- __GET__ :
- __UPDATE__ :
Admins only
type unchanged (only rate can be changed)
- __LIST__ :  
Admins only
List of all VAT

## Order Line
- __CREATE__ :  

- __DELETE__ :
- __GET__ :
- __UPDATE__ :

## Purchase
- __CREATE__ :  

- __DELETE__ :  
Admins only  
Delete all order lines of the purchase
- __GET__  
- __LIST FOR A USER (= history)__ :  
List all purchase of the user
 - __LIST ALL PURCHASE__ :  
Admins only