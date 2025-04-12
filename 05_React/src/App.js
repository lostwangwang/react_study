import React from "react";
const App = () => {
  const clickHandler = (event) => {
    alert("我是App中的clickHandler函数");
    /**
     * 在React中，无法通过return false取消默认行为
     * return false;
     * 
     * 事件对象:
     *  1. React事件中同样会传递事件对象，可以在响应函数中定义参数来接收事件对象。
     *  2. React中的事件对象同样不是原生的事件对象，而是经过React包装后的事件对象。
     *  3. 由于对象进行过包装，所以使用过程中我们无须再去考虑兼容性问题。
     */

    event.preventDefault(); // 取消默认行为
    event.stopPropagation(); // 取消事件冒泡

    alert(event);
  };

  return (
    <div id="root"
      onClick={()=>{
        alert("我是div");
      }}
     style={{ width: 200, height: 200, margin: "100px auto" }}>
      我是DIV!!!
      {/* 
      在React中事件需要通过元素的属性来设置，与原生JS不同，在React中事件的属性需要使用驼峰命名法 
        1. onclick -> onClick
        2. onchange -> onChange
      属性值不能直接执行代码，而是需要一个回调函数:
        onclick="alert(1234)"
        onClick=()=> {
          alert(1234)}
      */}
      <button
        onClick={() => {
          alert(1234);
        }}
      >
        哈哈
      </button>
      <button onClick={clickHandler}>嘻嘻</button>
      <a
        href="https://www.baidu.com"
        target="_blank"
        rel="noreferrer"
        onClick={clickHandler}
      >
        超链接
      </a>
    </div>
  );
};

/**
 * <button></button>
 *
 */

export default App;
