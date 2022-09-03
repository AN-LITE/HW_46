import React from "react";
import DefinitionsList from "./component/DefinitionsList";

function App() {

    const definitions = [
        { dt: 'Coffee', dd: 'Black hot drink', id: 1 },
        { dt: 'Milk', dd: 'White cold drink', id: 2 },
    ];

    return(
        <DefinitionsList data={definitions}/>
    )

}

export default App;
