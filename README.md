<h1 align="center">Dynamic To-Do List Application</h1>


## Overview
Create a dynamic to-do list application with three sections: Pending, In Progress, and
Completed. Users can add tasks, move tasks between sections, and optionally use
drag-and-drop functionality.

## Sections

1. Pending
 - Contains newly added tasks.
 - Each task has a button to move it to In Progress.

2. In Progress
- Contains tasks currently being worked on.
- Each task has a button to move it to Completed.

3. Completed
- Contains completed tasks with a timestamp in the format "DD/MM/YY, HH (e.g., 20/05/2024, 19:50).

## Functional Requirements
1. Add New Task
- Users can add a task to the Pending section with a title and optional description.

2. Move Tasks Between Sections
- Tasks can be moved from:
  - Pending to In Progress
  - In Progress to Completed
- Each task has a button for moving it to the next section.
- Tasks in Completed get a timestamp when moved to this section.
3. Drag and Drop (Optional)
- Optionally, users can drag and drop tasks between sections.
## Technologies Used

- **Frontend:** React.js, HTML, CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB


## Installation

```bash
  git clone https://github.com/RitikKumar202/dynamic-to-do-lists.git
```
Open 2 terminals in separate windows/tabs.

Terminal 1: Setting Up Server
```bash
  cd server
  npm install
  npm run dev
```
Terminal 2: Setting Up Client
```bash
  cd client
  npm install
  npm start
```

    
