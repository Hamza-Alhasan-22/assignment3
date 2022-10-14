import React from 'react';
import NewTag from '../NewTag';
import './style.css'
import './imgCards/1.png'
import './imgCards/2.png'
import './imgCards/3.png'
import './imgCards/4.png'
import './imgCards/5.png'
import './imgCards/6.png'
import './imgCards/7.png'
import './imgCards/8.png'

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }


function Card(props) {
    // const images = importAll(require.context('./components/NewArrivals/imgCards', false, /\.(png|jpe?g|svg)$/));
    // <img src={images['doggy.png']} />
    const tag = (check) => {
        let x;
        check === 'True' ? x = <NewTag /> : x = <></>
        console.log(x)
        return (
            x 
        )
    };
    return (
        <div className='card'>
            <img src={require('./imgCards/'+props.image)} alt={'img ' + props.id} className='card-img' />
            {
                props.newTag === 'active' ? tag('True') : tag('False')
            }
            <p className='card-description'>
                {props.description}
            </p>
            <p className='card-price'>
                {props.price}
            </p>
        </div>
    );
}

export default Card;