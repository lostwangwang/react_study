import { useRef } from "react";
import "./App.css";
const App = () => {
    /**
     * 获取原生的DOM对象
     *  1. 可以使用传统的document来对DOM进行操作
     *  2. 直接从React处来获取DOM对象
     *  步骤:
     *   1. 创建一个存储DOM对象的容器
     *    - 使用useRef()钩子函数
     *      - 钩子函数的注意事项: 
     *       1. React中的钩子函数只能用于函数组件或自定义钩子
     *       2. 钩子函数只能直接在函数组件中调用
     *   2. 将容器设置为想要获取DOM对象元素的ref属性
     *     <h1 ref={xxx}> </h1>
     * 
     * useRef()
     *  - 返回的就是一个普通的JS对象
     *  - {current：undefined}
     *  - 所以我们直接创建一个js对象，也可以代替useRef()
     *  - 区别：
     *    * 我们创建的对象，组件每次重新渲染都会创建一个新对象
     *    * useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象。
     *  - 当你需要一个对象，不会因为组件的重新渲染而改变时，就可以使用useRef()
     */

    // const h1Ref = useRef();

    const clickHandler = () => {

        // const header = document.getElementById("header");
        // console.log("header->>>", header);
        // header.innerHTML = "哈哈"
        console.log(h1Ref);
    };
    return (
        <div className={"app"} ref={h1Ref}>
            <h1 id="header">我时标题</h1>
            <button onClick={clickHandler}>按钮1</button>
            <button>按钮2</button>
        </div>
    );
};
export default App;
