/**
 * 组件
 * - React有两种创建方式:
 *  1. 函数式组件
 *      -  函数组件就是一个返回JKX的普通组件
 *      -  组件的首字母必须大写
 *  2. 类组件
 * 
 */
import ReactDOM from 'react-dom/client';
function App() {
    return <div>Hello World!</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)