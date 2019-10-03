import React from 'react';


const Item = (props) => {
    const { img, text } = props;
    return (<div className="border">

        <div className="item">

            <img src={img} alt="" />
            <p>{text}</p>

        </div>

    </div>);
}

export default Item;