import React from "react";
import { Card } from "../UI/Card/Card";
import "./LogsForm.css";
const LogsForm = () => {
  /**
   * 当表单项发生变化时，获取用户输入的内容
   */

  // 创建三个变量，用来存储表单中的数据
  let inputDate = "";
  let inputDesc = "";
  let inputTime = 0;
  // 创建一个响应函数，监听描述的变化
  const descChangeHandler = (event) => {
    inputDesc = event.target.value;
  };

  const dateChangeHandler = (event) => {
    inputDate = event.target.value;
  };

  const timeChangeHandler = (event) => {
    inputTime = event.target.value;
  };

  // 当表单提交时，汇总表单中的数据
  /**
   * 在React中，通常表单不需要自行提交
   * 而是要通过React提交表单
   * @param {*} event
   */
  const submitHandler = (event) => {
    // 阻止表单的默认提交行为
    event.preventDefault();
    // 获取表单中的数据、内容、时长
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: inputTime,
    };
    console.log(newLog);
  };
  return (
    <Card className="logs-form">
      <form onSubmit={submitHandler}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input id="date" type="date" onChange={dateChangeHandler}></input>
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input id="desc" type="text" onChange={descChangeHandler}></input>
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input id="time" type="number" onChange={timeChangeHandler}></input>
        </div>
        <div className="form-btn">
          <button onChange={descChangeHandler}>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
