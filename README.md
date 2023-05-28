# Cognisite-assignment

This is a React application that allows users to register, login, and manage tasks. It uses a JSON server to store user and task data.

## Features

- User Registration: Users can register by providing their name, mobile number, and password. The registration data is stored in a JSON file on the server.

- User Login: Users can log in using their mobile number and password. The login credentials are matched with the data stored on the server.

- Task Management: Users can add tasks to a list and view/delete tasks. The tasks are stored in a JSON file on the server.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/sainRaghuveer/cognisite-assignment.git

2. Navigate to the project directory:
   ```shell
   cd my-react-application

3. Install the dependencies:
   ```shell
   npm install

 
## usage
1. Start the REACT development server:
   ```shell 
   npm start

2. Open your browser and visit http://localhost:3000 to access the application.


# File structure

File Structure
The project structure of the application is as follows:

- src
  - components: Contains reusable components used in the application.

  - pages: Contains the main pages of the application.

  - routes: Contains the routes of the application

  - styles: Contains CSS stylesheets for styling the components.

  - App.js: The root component of the application.

  - index.js: The entry point of the application.

- Dependencies
  - The main dependencies used in this project are:

  -  react: JavaScript library for building user interfaces.

  -  react-router-dom: Library for routing in React applications.

  -  chakra-ui/react: Component library for building UI with Chakra UI.

  -  axios: Library for making HTTP requests.

  -  json-server: Fake REST API server for development and testing.

- Contributing
  -  Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Teach-Stack
| UI-Part | Server-Part |
|---------|-------------|
|![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)| ![JSON-server](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white) |


# JSON server routes

| Route | Method | Description |
|-------|-------------|----------|
| /users | `POST` | Register user's data in JSON server |
| /users | `GET` | For comparing user's data for login |
| /list | `GET` | To get all task that are present in JSON server |
| /list/id | `DELETE` |	To delete task |


 # Some screen shot for reference 

## Sign up page
<img src="https://github.com/sainRaghuveer/cognisite-assignment/assets/112657812/e6459b0e-cc4f-475b-a392-2b341a3cca36" alt="image"/>

## Login page
<img src="https://github.com/sainRaghuveer/cognisite-assignment/assets/112657812/dc04443b-b837-403b-a58d-6ccfbf673282" alt="image"/>

## Home page
<img src="https://github.com/sainRaghuveer/cognisite-assignment/assets/112657812/cafcbad0-e4b1-4c88-9973-4fe065b76ad0" alt="image"/>

