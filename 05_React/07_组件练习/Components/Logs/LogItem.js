import React from "react";
import { MyDate } from "./MyDate";
import "./LogItem.css";
export const LogItem = () => {
  return (
    <div className="item">
      {/* 日期的容器 */}
      <MyDate />
      {/* 日志内容的容器 */}
      <div className="content">
        <h2 className="desc">学习内容</h2>
        <div className="time">40分钟</div>
      </div>
    </div>
  );
};
