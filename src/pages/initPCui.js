import React from 'react'
class initPCui extends React.Component {
  render() {
    return (
      <ul>
        <li>安装：npm install antd --save</li>
        <li>安装：npm install babel-plugin-import --save-dev</li>
        <li>package.json
        "babel": {
          "presets": [
            "react-app"
          ],
          "plugins": [
            [
              "import",
              {
                "libraryName": "antd",
                "style": "css"
              }
            ]
          ]
        },
        </li>
      </ul>
    )
  }
}
export default initPCui
