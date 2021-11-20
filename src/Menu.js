import React from 'react'

 const Menu = (props) => {
    return (
        <div>
            <h1>Menu</h1>
            {props.list.map(item => <div className="listItem">{item}</div>)}
        </div>
    )
}
export default  Menu;