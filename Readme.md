## Turing T-SHIRTSHOP Backend



## Comments                 
1. Done with graphql with the possibility to also add Rest Routes to private or public folder
2. Made a middleware based on express-jwt to handle the security and integrate via graphql. I had a desire to experiment a little ^_^'  The middleware allows all request to pass but if has a token it decrypt it. The graphlql resolver is able to get it and can thorw an Authorization error in the resolver to block the request.

### IMPORTANT
----> So i just realize that u guys updated the requirements to follow the swagger documentation and when i started this was not a requirement... that's the reason i went for GraphQL. (It's also fun to vary from time to time). 
I imagine you have some automatic test so i will add rest endpoints to my api according to the documentation in the next few days. Will mantain graphql endpoint also just to not modify the frontend excesively.

----
## Installation
```bash
$ yarn 
```
## Run the project
```bash
$ yarn  start
```

## Generate production files
```bash
$ yarn build
```