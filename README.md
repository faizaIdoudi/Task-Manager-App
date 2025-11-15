# Task Manager Web Application

[![Java](https://img.shields.io/badge/Java-22-blue?style=for-the-badge&logo=java)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-brightgreen?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![H2 Database](https://img.shields.io/badge/H2-Database-purple?style=for-the-badge&logo=h2database)](http://www.h2database.com/html/main.html)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

<img width="1882" height="925" alt="Task Manager UI" src="https://github.com/user-attachments/assets/c72d8837-08dd-45ee-8288-64cd77801236" />

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
- Java 22 / Spring Boot 3.2
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
1. Clone the repository:
   ```bash
   git clone https://github.com/faizaIdoudi/Task-Manager-App.git
   cd Task-Manager-App/backend

