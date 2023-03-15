
# TeeRex Store

 A simple full responsive webapp where customers can browse through the catalog of t-shirts, add t-shirts to the shopping cart and checkout the items in the cart. 

## Features

- Search using free text which is a combination of one or more of the below attributes
  - Name 
  - Colour 
  - Type 
- Filter for t-shirts using specific attributes
    - Gender 
    - Colour 
    - Price range 
    - Type 
- Add one or more t-shirts to the shopping cart
- Total amount shown as per product price and quantity
- notifications as sucess or error


## API Reference

#### Get all items

```http
   https://geektrust/catalogue.json 
```
There is only products apis and all the features is done in client site
## Rules given by geektrust

- Every t-shirt type has a limited quantity. If the customer tries to order more than the available quantity, an error message should appear. 
- Filter can be applied by itself or on top of the search results. 
- Filters and Search need not be retained on navigation between pages, But the items in the cart should be retained. 
- The mockup provided is only a sample so that you have an indication of what is expected from you. You could choose to go with a completely different user experience. But you will need to ensure that all requirements mentioned in the problem are covered & there should be navigation between screens. 
- All features (search, filter, add to cart etc) should be handled on the client side. 
- There are no API's provided for these features. 
- There is no need to handle pagination. 
- There is no need to implement user registration / login. 



## Tech Stack
- React
- react-router-dom
- tostify
- react-icons
- SASS


## Hosted Link

``` https
    https://superlative-sunshine-55983b.netlify.app/
```


## Authors

- [@NamanSNag](https://github.com/NamanSnag)


