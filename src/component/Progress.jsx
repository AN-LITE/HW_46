import React from "react";

class DefinitionsList extends React.Component{

    render() {

        const {data} = this.props

        return (
            <dl>
                {data.map(data =>(
                    <React.Fragment key ={data.id}>
                        <dt>{data.dt}</dt>
                        <dd>{data.dd}</dd>
                    </React.Fragment>
                ))}
            </dl>
        )
    }
}
export default DefinitionsList;

