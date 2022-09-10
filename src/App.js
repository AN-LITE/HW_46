import React from "react";
import Progress from "./component/Progress";

function App() {

    return(
        <div className="container p-4">
            <Progress percentage={40}/>
        </div>
    )
}

export default App;