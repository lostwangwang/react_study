import React from "react";
import { MyDate } from "./MyDate";
import "./LogItem.css";
import { Card } from "../UI/Card/Card";
export const LogItem = (props) => {
  // 在函数组件，属性就相当于是函数的参数，可以通过参数来访问
  // 可以在函数组件的形参中定义一个props，props指向一个对象
  // 它包含了父组件中传递的所有参数
  // props是只读的，不能修改props中的属性
  console.log(props);
  return (
    <Card className="item">
      {/* 
      日期的容器, 如果将组件中的数据全部写死，将会导致组件无法动态设置，不具有使用价值 
      我们希望组件数据可以由外部设置，在组件间，父组件可以通过props属性向子组件传递数据。
      */}
      <MyDate date={props.date} />
      {/* 日志内容的容器 */}
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
    </Card>
  );
};
