// 日志的容器

import { LogItem } from "./LogItem";
import "./Logs.css";

const Logs = () => {
  return (
    <div className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="456" hello="abc"></LogItem> */}
      <LogItem date={new Date()} desc={"自己定义吧"} time={"50"}></LogItem> 
    </div>
  );
};

export default Logs;
