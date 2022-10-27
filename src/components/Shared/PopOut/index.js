import React, { useState } from 'react';
import './style.css'
import { FaTimes } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs'
import Stars from '../Stars';

function PopOut(props) {
    const popOuts = [
        {
            id: 1,
            title: '',
            sideImgs: [],
            data: {
                title: '',
                price: 0,
                stars: 4.8,
                description: '',
                employment: '',
                partnership: '',
                collab: ''
            }
        }
    ];
    //sideImgs [array], mainImg(real img as component -not just path-)

    const { quantity, setQuantity } = useState(1);
    const handleQuantity = (check) => {
        //check = '+' or '-'
        check == '+' ? setQuantity(quantity + 1) :
            quantity == 1 && check == '-' ? setQuantity(1) : 
            setQuantity(quantity - 1);
    };

    const {mainImg, setMainImg} = useState(props.sideImgs[0])
    const handleMainImg = (image) =>{
        setMainImg(image);
    };
    
    const sizeButton = [1, 2, 3, 4];

    // const {sizeClicked, setSizeClicked} = useState([true,false,false,false]);
    // const handleSizeClicked = (index) => {
    //     let arry = sizeClicked.map((item,i)=>{
    //         i==index? item=true: item=false;
    //     })
    //     setSizeClicked(arry);
    // }

    const sizeGuidelines = [
        'size1',
        'size2',
        'size3',
        'size4'
    ];
    const {sizeDiscription,setSizeDiscription} = useState(sizeGuidelines[0])
    const handleSizeDiscription = (index) =>{
        setSizeDiscription(sizeGuidelines[index]);
    }
    return (
        <div className='pop-out-container'>
            <div className='pop-out-title'>
                <p>{props.title}</p>
                <FaTimes />
            </div>
            <div className='pop-out-data'>
                <div className='pop-out-left'>
                    {
                        props.sideImgs.map(item => {
                            return (item)
                        })
                    //onClick={()=>handleMainImg(item)}
                    }
                </div>
                <div className='pop-out-img'>
                    {mainImg}
                </div>
                <div className='pop-out-right'>
                    {/*title, price, stars, description, 
                    employment, partnership, collab*/}
                    <div className='right-title'>
                        <h2>{props.data.title}</h2>
                        <span>
                            <p>SGD {props.data.price}</p>
                            <Stars star={props.data.stars} />
                        </span>
                    </div>
                    <div className='right-description'>
                        <h3>Description</h3>
                        <p>{props.data.description}</p>
                    </div>
                    <div className='right-employment'>
                        <h3>Artisan Employment</h3>
                        <p>{props.data.employment}</p>
                    </div>
                    <div className='right-partnership'>
                        <h3>Partnership</h3>
                        <p>{props.data.partnership}</p>
                    </div>
                    <div className='right-collab'>
                        <h3>In Collab</h3>
                        <p>{props.data.collab}</p>
                    </div>
                    <div className='right-size'>
                        <p>SIZE</p>
                        <div>
                            <span className='size-buttons'>
                                {sizeButton.map(item => {
                                    return (
                                        <button onClick={()=>handleSizeDiscription(item)}>{item+1}</button>
                                    )
                                })}
                            </span>
                            <p>SIZE GUIDELINES</p>
                        </div>
                        <p>{sizeDiscription}</p>
                    </div>
                    <div className='right-quantity'>
                        <p>QUANTITY</p>
                        <div>
                            <span>
                                <button onClick={()=>{handleQuantity('-')}}>-</button>
                                <button>{quantity}</button>
                                <button onClick={()=>{handleQuantity('+')}}>+</button>
                            </span>
                            <button>Add to cart</button>
                            <span>
                                <BsQuestionSquare />
                                <button>Add to wishlist</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button>View full product details</button>
        </div>
    );
}

export default PopOut;