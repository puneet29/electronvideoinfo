# Electron App Beginner

An electron app that will help understand the basics of electron, its syntax, and workflow.
This app illustrates the way electron app is built. How it uses IPC(Inter Process Communication) to fetch the length of video using fluent-ffmpeg which is a node js library.

## Getting Started

1. Install npm (if not):

    ```bash
    sudo apt install npm
    ```

2. Install electron dependency:

    ```bash
    cd videoinfo
    npm init
    npm install --save electron
    sudo apt install ffmpeg
    npm install --save fluent-ffmpeg
    ```

3. Run app:

    ```bash
    npm run electron
    ```