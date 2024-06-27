# Developer Motivation Dashboard

A dashboard designed to motivate developers with daily quotes, programming tips, and task management.
Creatind using SolidJS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PmwzyCAM2Gg" frameborder="0" allowfullscreen></iframe>

### Click to watch demo:

[![Watch Demo](https://github.com/brachaer/DeveloperDashboard/blob/main/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202024-06-27%20135937.png)](https://www.youtube.com/watch?v=PmwzyCAM2Gg)


## Features

- **Motivational Quotes**: Get a random motivational quote for developers.
- **Daily Programming Tips**: Receive random daily programming tips from DEV.to.
- **Task Management**: Add and manage your development tasks.
- **Animated Mascot**: Interact with a cute animated mascot for some fun.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/brachaer/DeveloperDashboard.git
    cd my-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to see the dashboard in action.
2. Click on the "Get New Quote" button to fetch a new motivational quote.
3. Add your tasks in the task management section.
4. Click on the mascot to see different animations.

## Components

### 1. `App.jsx`
The main component that renders the header, quote, mascot, tasks, pomodoro timer, and programming tips.

### 2. `Quote.jsx`
Fetches and displays a random motivational quote for developers.

### 3. `Mascot.jsx`
Displays an interactive animated mascot.

### 4. `Tasks.jsx`
Allows users to add and manage development tasks.

### 5. `ProgrammingTip.jsx`
Fetches and displays a random programming tip from DEV.to.

## Technologies Used

- **SolidJS**: A declarative JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **CSS Modules**: Scoped CSS to avoid global styles conflicts.

