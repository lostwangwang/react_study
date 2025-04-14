// 日志的容器

import { Card } from "../UI/Card/Card";
import { LogItem } from "./LogItem";
import "./Logs.css";

const Logs = () => {
  // 模拟一组从服务器中加载的数据
  const logsData = [
    {
      id: "001",
      date: new Date(2021, 1, 10, 10, 10),
      desc: "学习九阳神功",
      time: "50",
    },
    {
      id: "002",
      date: new Date(2021, 2, 11, 10, 10),
      desc: "学习降龙十八掌",
      time: "50",
    },
    {
      id: "003",
      date: new Date(2021, 3, 12, 10, 10),
      desc: "学习金钟罩铁布衫",
      time: "50",
    },
    {
      id: "004",
      date: new Date(2021, 3, 12, 10, 10),
      desc: "学习九阴白骨爪",
      time: "50",
    },
  ];
  return (
    <Card className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="456" hello="abc"></LogItem> */}
      {
        logsData.map((item) => (
          <LogItem
            date={item.date}
            desc={item.desc}
            time={item.time}
            key={item.id}
          ></LogItem>
        ))
        // logsData.map((item) => <LogItem {...item}/>)
      }
    </Card>
  );
};

export default Logs;
