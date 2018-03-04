# react
studying for React js

# set the Global Package

npm install -g babel webpack webpack-dev-server

# create the project

npm init

# install Dependency and Plugin

(--save)
npm install --save react react-dom
(--save-dev)
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server

# make the directory 

react
├── package.json         
├── public            # server public path
│   └── index.html    # main page
├── src               # React.js project root
│   ├── components    
│   │   └── App.js    
│   └── index.js      # Webpack Entry point
└── webpack.config.js 

# modify webpack.config.js

