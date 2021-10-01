import React from 'react';

const ReviewItem = ({product,handleRemove}) => {
    const {name,price,quantity,key}=product
    return (
        <div className="product">
            <div>
                <h4 className="product-name"> {name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button className="btn-regular" onClick={()=>handleRemove(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;