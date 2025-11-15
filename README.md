# Task Manager Web Application

<img width="1882" height="925" alt="image" src="https://github.com/user-attachments/assets/c72d8837-08dd-45ee-8288-64cd77801236" />


*Screenshot: Task Manager interface with Pending and Completed tasks*

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Screenshots](#screenshots)
- [Folder Structure](#folder-structure)
- [Additional Considerations](#additional-considerations)

---

## Project Overview
This is a **full-stack task manager application** built with:

- **Backend:** Java Spring Boot (RESTful API)
- **Frontend:** React.js (with TailwindCSS and Framer Motion)
- **Database:** H2 in-memory database

The application allows users to:

- Add, update, and delete tasks
- Mark tasks as completed or pending
- View tasks in two separate columns (Pending / Completed)
- Enjoy smooth animations when tasks move between columns

---

## Technologies Used
**Backend**
- Java 22 / Spring Boot
- Spring Web (REST APIs)
- H2 Database (in-memory)
- Spring Validation & Exception Handling

**Frontend**
- React.js
- TailwindCSS for styling
- Framer Motion for animations
- Axios for HTTP requests
- React Icons (edit/delete icons)

**Tools**
- Git / GitHub for version control
- VS Code / IntelliJ IDEA for development
- Postman (optional, for API testing)

---

## Features
- **Create Task:** Add new tasks with a title and description.
- **Update Task:** Modify task details inline.
- **Delete Task:** Remove tasks.
- **Toggle Completion:** Mark tasks as completed/pending.
- **Animated UI:** Tasks move smoothly between Pending and Completed columns.
- **Responsive Design:** Works on desktop and mobile.

---

## Backend Setup
1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   cd YOUR_REPOSITORY/backend
2. Open the backend project in IntelliJ IDEA or your preferred IDE.

3. Run the Spring Boot application:
   src/main/java/com/faiza/taskmanager/TaskManagerApplication.java
Right-click → Run
4. The backend runs at:
   http://localhost:8080
5. H2 Database Console:
   http://localhost:8080/h2-console
Use the following credentials:
JDBC URL: jdbc:h2:mem:testdb
User: sa
Password: (leave empty)

## Frontend Setup
1. Navigate to the frontend folder:
   cd ../frontend
2. Install dependencies:
   npm install
3. Start the React development server:
   npm start

5. 
