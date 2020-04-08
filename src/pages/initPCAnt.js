import React from 'react'

class initPCAnt extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>安装:npm install ant --save</li>
          <li>高级配置按需加载</li>
          <li>此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 react-app-rewired 安装:npm install react-app-rewired --save-dev</li>
          <li>由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 customize-cra。安装 npm install react-app-rewired customize-cra</li>
          <li>修改packjson的配置</li>
          <li>
          /* package.json */
            "scripts": {
            -   "start": "react-scripts start",
            +   "start": "react-app-rewired start",
            -   "build": "react-scripts build",
            +   "build": "react-app-rewired build",
            -   "test": "react-scripts test",
            +   "test": "react-app-rewired test",
            }
          </li>
          <li>根目录添加config-overrides.js文件</li>
          <li>安装：babel-plugin-import</li>
          <li>引入css按需加载组件查看官网https://ant.design/docs/react/use-with-create-react-app-cn</li>
          <li>自定义主题要安装less</li>
          <li>npm install less less-loader</li>
          <li>修改config-overrides.js配置;参考官网;在改文件中配置主色调</li>
        </ul>
      </div>
    )
  }
}
export default initPCAnt
