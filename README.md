# Image Proccissing API

 ## Table of contents

 * [Overview](#overview)
 * [Requirments](#requirments)
 * [How to use](#how-to-use)
 * [Copyright](#copyright) 

 ## Overview
The Image processing API uses as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site.

[back to top](#table-of-contents)

 ## Requirments
 
#### 1- prettier
#### 2- ESlint
#### 3- Typescript
#### 4- Jasmine
#### 5- Express
#### 6- Sharp
#### 7- Express Validator
#### 8- Supertest

[back to top](#table-of-contents)


## How to use
#### 1- download the project
#### 2- install packages
`npm install`
#### 3- run prettier script
`npm run prettier`
#### 4- run ESlin script
`npm run lint`
#### 5- build and test the project
`npm run test`
#### 6- start the server
`npm run start`
#### 7- visit homepage endpoint
`http://localhost:3600`
#### 8- Resizing endpoint
`http://localhost:3600/api/images?filename=&width=&height=`
* must use a valid file name
* available file names: 
    * icewater
    * night
    * palmtree
    * river
    * sea
* width and height must be a numeric values > 0
* if you want to use your own image, you should first put it in `build/public/images` folder.

[back to top](#table-of-contents)

## Copyright
coded by [Ahmed Shaaban Ahmed](https://www.linkedin.com/in/ahmed-shaaban2210/)

[back to top](#table-of-contents)