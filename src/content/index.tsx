import React from 'react'
import ReactDOM from 'react-dom'

function Content() {
    return (
        <div className="Strasnger">
          heihei
        </div>
    )
}

const app = document.createElement('div')
app.id = 'Strasnger'
document.body.appendChild(app)

ReactDOM.render(<Content />, app)

try {
    let insertScript = document.createElement('script')
    insertScript.setAttribute('type', 'text/javascript')
    insertScript.src = window.chrome.extension.getURL('global.js')
    document.body.appendChild(insertScript)
} catch (error) {
  console.log(error)
}
