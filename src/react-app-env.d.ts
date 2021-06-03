/// <reference types="react-scripts" />
declare interface Window {
  chrome: {
    extension: {
      getURL: Function
    },
    runtime: {
      onInstalled: {
        addListener: Function
      }
    }
  }
}



declare module '*.js'
declare module '*.tsx'
declare module '*.less'
declare module '*.scss'
declare module 'classnames'
declare module 'dva-loading'