## Description

The Interview Scheduler app is a Single Page Application built with React that allows users to book, edit and delete appointments and select different interviewers. They can save or cancel any changes.

This application displays:

- Available appointments Monday through Friday
- Input field for creating appointments
- List of available Iterviewers
- Displays number of appointment spots left for each day
- Edit/Delete/Confirm buttons as needed

## Screenshot

!["Home Page Screenshot"](https://github.com/WDFP/scheduler/blob/master/docs/Interviewer%20Scheduler%20App-%20Home%20page.png?raw=true)

## Setup

Fork and clone this project
Install dependencies with `npm install`

Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) project into a seperate folder (Not the same folder as previous project)
Follow the README in that project to setup the API
Run `npm start` in the terminal from the scheduler-api directory
Run `npm start` in a seperate terminal from the scheduler directory
Go to [localhost](http://localhost:8000/) in your browser

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependecies

*  "axios": "^0.20.0",
*  "classnames": "^2.2.6",
*  "normalize.css": "^8.0.1",
*  "react": "^16.9.0",
*  "react-dom": "^16.9.0",
*  "react-scripts": "3.4.4"

## DevDependecies

*  "@babel/core": "^7.4.3",
*  "@storybook/addon-actions": "^5.0.10",
*  "@storybook/addon-backgrounds": "^5.0.10",
*  "@storybook/addon-links": "^5.0.10",
*  "@storybook/addons": "^5.0.10",
*  "@storybook/react": "^5.0.10",
*  "@testing-library/jest-dom": "^4.0.0",
*  "@testing-library/react": "^8.0.7",
*  "@testing-library/react-hooks": "^8.0.1",
*  "babel-loader": "8.1.0",
*  "prop-types": "^15.8.1",
*  "react-test-renderer": "^16.9.0",
*  "sass": "^1.53.0"
