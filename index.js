import React from "react"
import ReactDOM from "react-dom"

//---------------PROJECT PART 1-----------------------------------------------------------------
// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

function ReasonToLearnReact() {
    return (
        <div>
            <h1>Reasons To Learn React</h1>
            <ol>
                <li>Working with components, allows you to create scalable and maintainble applications</li>
                <li>Being written in JavaScript curve is fast</li>
                <li>Gives us the perfect balance between profit and performance</li>
                <li>The community is very active</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<ReasonToLearnReact />, document.getElementById("root"))