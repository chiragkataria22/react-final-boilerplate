# Getting Started with react-final-boilerplate

1. Clone the code
2. npm install
3. You are good to go with React Application. Open http://localhost:3000/ and you can see your changes 

# Modules Installed

1. babel
2. webpack,
3. loadable components - for code splitting
4. styled components - for styling
5. react router config

# File Structure
src
  client
    index.tsx - contains coniguration for client starting point
  server
    index.tsx - configuration for server starting point
    renderer.tsx - set up for the code splitting at the server side
    html
      html.ts - main html file that serves the root of the project

# How to create production build

You just need to run "npm run build:prod" 
It will create a dist folder and a server.js file will be created that will be used to deploy on the server.
You can test it out by writing node dist/server.js
