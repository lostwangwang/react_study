import React from "react";

// 类组件必须继承React.Component
// 相较于函数组件，类组件的编写要麻烦一点，但是他们的功能是一样的

class App extends React.Component {

  // 类组件中，必须添加一个render()方法,且方法的返回值是一个jsx
  render() {
    return <div>我是app组件</div>;
  }
}
export default App;
