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
 
 
# props and state

|  feature | props | state |
| :------- | ----: | :---: |
| It can be changed value by parent components? | Yes |  No    |
| It can be changed in the components?           | No  |  Yes   |


# for easy to control array

- install Immutable-js library 
npm install --save react-addons-update

1. push

```
this.setState({
    list: update(
              this.state.list, 
              {
                  $push: [newObj, newObj2]
              }
});
```

2. delete

```
this.setState({
    list: update(
              this.state.list, 
              {
                  $splice: [[index, 1]]
              }
});
```

3. update

```
this.setState({
    list: update(
              this.state.list, 
              {
                  [index]: {
                      field: { $set: "value" },
                      field2: { $set: "value2" }
                  }
              }
});
```


# LifeCycle API

> **1: Mounting** 
 
Component is created                                       | Complete
--------                                                   | ---
**Constructor** -> **componentWillMount** ->  **render** ->| **componentDidMount** 

```
> **Note:** componentDidMount
> - **You can do such as JavaScript framework, setTimeout, setInterval, AJAX and others**
 ```
 
> **2: Updating** 

Changed the prop                | Component is updated                                                 | Complete 
--------                        | ---                                                                  | ---
**componentWillReceiveProps** ->|**shouldComponentUpdate** ->  **componentWillUpdate** -> **render** ->| **componentDidUpdate**

```
> **Note:** componentWillReceiveProps

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }

> - **컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
      
      prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
      이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.**
 ```
```
> **Note:** shouldComponentUpdate
      
      shouldComponentUpdate(nextProps, nextState){
          console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
          return true;
      }
      
> - **prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
      
      위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
      
      예: return nextProps.id !== this.props.id;
      
      JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.**      
 ```
```
> **Note:** componentWillUpdate
      
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }
      
> - **Before updating component, it's excuted
Don't use this.setState() cuz it must be infinite loop.          
**      
 ```

> **3: If state is updated**

Directly Component is updated                                         | Complete 
--------                                                              | ---                                                                  | ---
**shouldComponentUpdate** ->  **componentWillUpdate** -> **render** ->| **componentDidUpdate**
 
> **4: Unmounting** 
  
Component is deleted| 
--------            | ---
**componentWillUnmount**|  


 
 # Using ref
 
```
class Hello extends React.Component {
    handleClick() {
    	  this.input.value = "";
          this.input.focus();
    } 
    
    render() {
  	return (
    	    <div> 
      	        <input ref={ref=> this.input = ref}/>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );        
  }
}


ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);
```
 
# Method Component 

**If you don't want to use LifeCycle API or state in the component**
**I recommend method component**
```
import React from 'react';

const Hello = (props) => {
    return (
        <div>Hello {props.name}</div>
    );
}

export default Hello;
```

 > **Reference:**
  https://velopert.com
 