/**
 * 快捷方式:
 * rfc: 创建函数组件
 * rcc: 创建类组件
 * rafce: 创建函数组件并导出
 * rafc: 创建函数组件不导出
 * rccp: 创建类组件并导出
 */
import React, { Component } from 'react'
import './App.css'
import User from './coponents/User'

export default class App extends Component {

    render() {

        return (
            <div className='app'>
                <User name="猪八戒" age={28} gender={'男'}></User>
            </div>
        )
    }
}
