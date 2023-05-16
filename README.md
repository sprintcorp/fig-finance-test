# Getting started

## Brief description

The application is designed to help user get event base on interest. The application
allows users to filter through various categories of event.

## Features
- Get Event
- Filter Event

## Tools
- NodeJs
- ReactJs Framework
- ExpressJs
- MongoDb
- Mongoose
- Docker

## Login details

Application is not authenticated neither is authorization required

## Project setup


Clone the repository

    git clone https://github.com/sprintcorp/fig-finance-test.git

Switch to project directory

    cd fig-finance-test/

Run via Docker

    docker-compose up -d

N:B This will take time running for the first time because it will build the application
before running it

Snapshot

![image](https://user-images.githubusercontent.com/37757522/174438196-a9b7469b-b022-429d-b18a-89d354593130.png)

Stop application running on docker

    docker-compose down
    
 snapshot
 
 ![image](https://user-images.githubusercontent.com/37757522/174439557-72226895-90e1-4699-a2ce-1b234eb5e3fe.png)


Upon successful run access project frontend via link

    http://localhost:3000

Backend
    
    http://127.0.0.1:5000

Or run setup individually outside docker

(backend)

    cd fig-finance-test/backend

Install all the client side dependencies using node package manager

    npm install

Start the backend application

    npm run dev

To run test use the command below

    npm run test


![image](https://user-images.githubusercontent.com/37757522/174410721-1f141b0e-bbf9-49ad-98de-3d85c55459f6.png)


(frontend)

    cd fig-finance-test/frontnd

Install all the client side dependencies using node package manager

    npm install

Start the frontend

    npm run start


You can now access the application at `http://localhost:3000` when it starts provided port 3000 is available on your device

Default API URL is `http://127.0.0.1:5000/api`. API url can  is located in the directory below and can be changed if the backend is not running on the default application port

    fig-finance-test/frontnd/src/server.js

### Api route and response

- Get all events `http://127.0.0.1:5000/api/events` method `GET`
#### Response

    {
        "data": [
            {
                "_id": "62acf34a8d221c6bd0ad4c60",
                "title": "Space jam",
                "description": "This session seeks to get people thinking about the ultimate objective of health AI",
                "category": {
                                _id:"62ad06c7713c66ce213a80af",
                                name:"Environment"
                            },
                "address": "London, United Kingdom",
                "isVirtual": false,
                "date": "2021-07-17T10:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "62acf44c466df11290a6739d",
                "title": "Space jam",
                "description": "This session seeks to get people thinking about the ultimate objective of health AI",
                "category": {
                                _id:"62ad06c7713c66ce213a80af",
                                name:"Environment"
                            },
                "address": "London, United Kingdom",
                "isVirtual": false,
                "date": "2021-07-17T10:00:00.000Z",
                "__v": 0
            }
        ]
    }

- Get all event by category `http://127.0.0.1:5000/api/events/filter?category=62aca885d4e6ea4a32149bd` method `GET` 
    where category is category id of an existing category
#### Response

    {
        "data": [
            {
                "_id": "62acf34a8d221c6bd0ad4c60",
                "title": "Space jam",
                "description": "This session seeks to get people thinking about the ultimate objective of health AI",
                "category": {
                                _id:"62ad06c7713c66ce213a80af",
                                name:"Environment"
                            },
                "address": "London, United Kingdom",
                "isVirtual": false,
                "date": "2021-07-17T10:00:00.000Z",
                "__v": 0
            }
            }
        ]
    }

- Get all categories `http://127.0.0.1:5000/api/categories` method `GET`
#### Response

    {
        "data": [
            {
                "_id": "62ad06c7713c66ce213a80ae",
                "name": "Economics",
                "__v": 0
            },
            {
                "_id": "62ad06c7713c66ce213a80af",
                "name": "Environment",
                "__v": 0
            }
        ]
    }

- Create events `http://127.0.0.1:5000/api/events` method `POST`

#### Data
    {
        "title":"Climate chage",
        "description":"Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels (like coal, oil and gas), which produces heat-trapping gases",
        "category":"62ad06c7713c66ce213a80af",
        "date":"2021-07-17T10:00:00.000Z",
        "isVirtual":true,
        "address":"London, United Kingdom"
    }

- Where `category` takes the id of an existing category

#### Response

    {
        "success": true,
        "data": {
            "title": "Climate chage",
            "description": "Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels (like coal, oil and gas), which produces heat-trapping gases",
            "category": "62ad06c7713c66ce213a80af",
            "address": "London, United Kingdom",
            "isVirtual": true,
            "date": "2021-07-17T10:00:00.000Z",
            "_id": "62ad0946713c66ce213a80c3",
            "__v": 0
        }
    }


- Create category `http://127.0.0.1:5000/api/category` method `POST`

#### Data
    {
        "name":"Space"
    }

#### Response

    {
        "success": true,
        "data": {
            "name": "Space",
            "_id": "62ad92c9bf0213f9e719517b",
            "__v": 0
        }
    }

- Import categories `http://127.0.0.1:5000/api/categories/import` method `POST`.
    This import categories stored in /data/Categories.js file into the database, more can be added
#### Response

    {
        "importCategories": [
            {
                "name": "Economics",
                "_id": "62acf5088761f9aee4d9729b",
                "__v": 0
            },
            {
                "name": "Environment",
                "_id": "62acf5088761f9aee4d9729c",
                "__v": 0
            }
        ]
    }


    
### Snapshots   
   
   ![image](https://user-images.githubusercontent.com/37757522/174410867-34179316-4211-47b1-9921-a24149a09b00.png)
   
   ![image](https://user-images.githubusercontent.com/37757522/174410926-84ffe847-79aa-4617-b487-94cfd747b919.png)
   
   ![image](https://user-images.githubusercontent.com/37757522/174411210-9521b97c-06f4-4795-b753-1df63fb06565.png)
   
   ![image](https://user-images.githubusercontent.com/37757522/174411218-ab0d4380-f0a8-41d5-a31a-f0b7066392fd.png)
   
   ![image](https://user-images.githubusercontent.com/37757522/175020155-a69092fd-daf0-49ab-be58-6e75c4987c2a.png)








