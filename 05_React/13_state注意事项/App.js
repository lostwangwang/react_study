import { useState } from "react";
import "./App.css";
const App = () => {
    /**
     * state:
     * - state实际就是一个被React管理的变量
     * - 当我们通过setState()修改变量的值时，会触发组件的自动重新渲染。
     * - 只有state值发生变化时，组件才会重新渲染。
     * - 当state的值是一个对象时，修改时是使用新的对象去替换已有对象
     * - 当通过setState去修改state时，并不表示修改当前的state,它修改的时组件下一次渲染时state的值
     * - setState()会出发组件的重新渲染，它是异步的
     * - 所以当我们调用setState()，需要用到旧state的值时，一定要注意有可能出现计算错误的情况。
     * - 为了避免这种情况，可以通过为setState()传递回调函数的形式来修改state的值
     */
    const result = useState(2);
    // let counter = result[0]; // 数字的初始值
    // let setCounter = result[1]; // 修改数字的函数
    const [counter, setCounter] = result; // 数字的初始值, 修改数字的函数
    const [user, setUser] = useState({ name: "张三", age: 18 });
    const addHandler = () => {
        // 点击后，数字+1
        // setTimeout(() => {
        //     // setCounter(counter + 1);
        //     /**
        //      * setState()中回调函数的返回值将会成为新的state值
        //      * 回调函数执行时，React会将新的state值作为参数传递
        //      */
        //     setCounter((prev) => {
        //         return prev + 1;
        //     });
        // }, 1000);

        setCounter((prev) => prev + 1);
        // setCounter(counter + 1);

        // setCounter(2);
        // setCounter(3);
        // setCounter(4);
        // setCounter(5);
    };
    const editInfo = () => {
        // setUser({ name: "猪八戒", age: 28 })
        // 如果直接修改旧的state对象，由于对象还是那个对象，所以不会生效

        // 两种方式
        // 1.使用Object.assign()方法进行浅复制
        // const newUser = Object.assign({}, user); // 浅复制...
        // newUser.name = "猪八戒";
        // setUser(newUser); // 重新赋值
        // 2.使用展开运算符进行浅复制
        // const newUser = { ...user }; // 浅复制...
        setUser({ ...user, name: "猪八戒" })
    };

    return (
        <div className={"app"}>
            <h1>{counter} --- {user.name} --- {user.age}</h1>
            <button onClick={addHandler}>按钮1</button>
            <button onClick={editInfo}>按钮2</button>
        </div>
    );
};
export default App;
