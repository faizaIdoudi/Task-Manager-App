# Task Manager Web Application

<img width="1882" height="925" alt="image" src="https://github.com/user-attachments/assets/185fb14a-1ddc-4079-804f-dccce1a2cb2c" />

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
- Java 17+ / Spring Boot
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
- VS Code for development
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
1. Navigate to the backend folder:
   ```bash
   cd backend
