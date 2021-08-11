# Plantify

## Description
Plantify is a full stack app that allows a user to keep track of their plant care, you can add all of the plants that you have or simply want and make sure they're well taken care of.

# MVP

- Front End
  - Built with React
  - Consume from my Ruby on Rails API 
  - Render data using functional React components
  - Utilize React Router for client side routing
  - Full CRUD functionality 
  - Users submit a new plant
  - Users can log their plant care
  - Users can edit the plants they added
  - Users can delete their plants

- Styling
  - Styled with CSS
  - Implementation of at least 2 media queries

- Deployment
  - Fully functioning deployed front-end
  - Fully functioning deployed back-end via Heroku

- Back End
  - Build a Ruby on Rails server
  - utilize RESTful JSON endpoints
  - Incorporate at least 1 association
  -Build a database with at least 3 tables
  - Full CRUD functionality 
  - Incorporate user authentication


## Wireframes

https://www.figma.com/file/GOn7Nulfbz633ORZtxXLuH/Plantify?node-id=0%3A1

## ERD Model

https://app.diagrams.net/#G1W-uraqDesdx5lJjyDIxXPqSXLxiZfyqV
## Component Hierarchy
https://whimsical.com/plantify-7VAX3weBjLhFW5RVNLtB4c


## Component Architecture

src
|__ assets/
      |__ reset.css
|__ screens/
      |__ Homepage.jsx
      |__ Plants.jsx
      |__ PlantsDetail.jsx
      |__ EditPlants.jsx
      |__ NewPlants.jsx
      |__ Plantcare.jsx
      |__ Register.jsx
      |__ SignIn.jsx

|__ components/
      |__ Posts.jsx
      |__ LogIn.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ plantcare.js
      |__ user.js
|__ Layout/
      |__ Navbar.jsx
      |__ footer.jsx
|__ App.jsx
|__ index.js

## Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _npm i react_ |
|   React Router   | _npm i react-router-dom_ |
|     Axios        | _npm i axios_ |
|     JWT          | _gem 'jwt'_ |
|     Bcrypt       | _gem 'bcrypt'_ |

## Time Estimates

| Task | Priority | Estimated Time | Actual Time
|------| :----: | :----: | :----: |
| Rails Backend                  | H  | 8 hrs                    
| Create CRUD Actions (backend)  | H  | 8 hrs                      
| Seed Data                      | H  | 1 hrs                      
| Migrations and Schema          | H  | 2 hrs                       
| Routes                         | H  | 1 hrs                       
| Create CRUD Actions (frontend) | H  | 6 hrs                        
| Services Files                 | H  | 4 hrs                       
| Frontend CRUD edits            | H  | 4 hrs                      
| Debugging                      | H  | 2 hrs                      
| CSS                            | H  | 8 hrs                    
| Total                          |    | 44 hrs                   


## Post-MVP

- Implement a CSS made button

***

## Code Showcase

> N/A yet

## Code Issues & Resolutions

> N/A yet
