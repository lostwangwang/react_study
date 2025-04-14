import React from "react";
import { Card } from "../UI/Card/Card";
import "./LogsForm.css";
const LogsForm = () => {
  /**
   * 当表单项发生变化时，获取用户输入的内容
   */

  // 创建三个变量，用来存储表单中的数据
  // let inputDate = "";
  // let inputDesc = "";
  // let inputTime = 0;
  // const [inputDate, setInputDate] = React.useState("");
  // const [inputDesc, setInputDesc] = React.useState("");
  // const [inputTime, setInputTime] = React.useState(0);
  // 将表单数据统一到一个state中
  const [formData, setFormData] = React.useState({
    inputDate: "",
    inputDesc: "",
    inputTime: 0,
  });
  // 创建一个响应函数，监听描述的变化
  const descChangeHandler = (event) => {
    // inputDesc = event.target.value;
    // setInputDesc(event.target.value);
    setFormData({
      ...formData,
      inputDesc: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // inputDate = event.target.value;
    // setInputDate(event.target.value);
    setFormData({
      ...formData,
      inputDate: event.target.value,
    });
  };

  const timeChangeHandler = (event) => {
    // inputTime = event.target.value;
    // setInputTime(event.target.value);
    setInputTime({
      ...formData,
      inputTime: event.target.value,
    });
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
      date: new Date(formData.inputDate),
      desc: formData.inputDesc,
      time: +formData.inputTime,
    };
    console.log(newLog);

    setFormData({
      inputDate: "",
      inputDesc: "",
      inputTime: "",
    });
    /**
     * 提交表单后，如何清空表单中的旧数据
     * 现在的这种表单，在React我们成为非受控组件
     *
     * 我们可以将表单中的数据存储到state中，
     * 然后将state设置为表单项value值，
     * 当表单项发生变化，state会随之变化...
     * 反之，state发生变化，表单项也会跟着变化，这种操作我们称为双向绑定
     * 这样一来，表单就成为了一个受控组件。
     */
  };
  return (
    <Card className="logs-form">
      <form onSubmit={submitHandler}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input
            id="date"
            type="date"
            onChange={dateChangeHandler}
            value={formData.inputDate}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            id="desc"
            type="text"
            onChange={descChangeHandler}
            value={formData.inputDesc}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            id="time"
            type="number"
            onChange={timeChangeHandler}
            value={formData.inputTime}
          ></input>
        </div>
        <div className="form-btn">
          <button onChange={descChangeHandler}>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
