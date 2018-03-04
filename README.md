# react
studying for React js

# set the Global Package

npm install -g babel webpack webpack-dev-server

# create the project

npm init

# install Dependency and Plugin

```
(--save)
npm install --save react react-dom

(--save-dev)
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server
```

# make the directory 

```
react
├── package.json         
├── public            # server public path
│   └── index.html    # main page
├── src               # React.js project root
│   ├── components    
│   │   └── App.js    
│   └── index.js      # Webpack Entry point
└── webpack.config.js 
```
# modify webpack.config.js

# start

npm install

npm start

# jsx rules 

1. use div element wrapper

error
```
        return  (
                <h1> Hello </h1>
                <h2> Welcome </h2>
        );
```

correct

```
        return  (
            <div>
                <h1> Hello </h1>
                <h2> Welcome </h2>
             </div>   
        );
```

2. use {} wrapping for JavaScript
```
    render(){
        let text = "Dev-Server"
        return  (
            <div>
                <h1> Hello </h1>
                <h2> Welcome to {text}</h2>
            </div>
        );
    }
```

3. use method

- Don't use () behind method cuz if use (), it should be called both when reloading page and click.
- You can't use if-else conditional but use <p>{1 == 1 ? 'True' : 'False'}</p>. 
```
    sayHey(){
       alert("hey");
    }

    render(){
        let text = "Dev-Server"
        return  (
            <div>
                <h1> Hello </h1>
                <h2> Welcome to {text}</h2>
                <button onClick={this.sayHey}>Click Me</button>
            </div>
        );
    }
```

4. Inline style

- use camelCase 
```
    render(){
        let text = "Dev-Server";

        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };

        return  (
            <div>
                <h1> Hello </h1>
                <h2> Welcome to {text}</h2>
                <button onClick= {this.sayHey}>Click Me</button>
                <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
            </div>
        );
    }
```

5. comments
```
 { /* comments */ }
 ```
 
6. Naming Convention
 - use CamelCase (first character should be Uppercase )
 
 
