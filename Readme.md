## Turing T-SHIRTSHOP Backend



## Comments                 
1. Done with graphql with the possibility to also add Rest Routes to private or public folder
2. Made a middleware based on express-jwt to handle the security and integrate via graphql. I had a desire to experiment a little ^_^'  The middleware allows all request to pass but if has a token it decrypt it. The graphlql resolver is able to get it and can thorw an Authorization error in the resolver to block the request.
                
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