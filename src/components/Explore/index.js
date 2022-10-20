import React from 'react';
import './style.css'
import News from '../Shared/News';
import SectionTitle from '../Shared/SectionTitle';
import './1.png'
import './2.png'
import './3.png'

function Explore(props) {
    const news = [
        {
            id: 2,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'Kérastase: A Collaboration',
            hasImage: true,
            hasData: false,
            image: '2.png',
            data: ''
        },
        {
            id: 3,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'Jaclynn Seah',
            hasImage: false,
            hasData: true,
            image: '',
            data: 'Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.'
        },
        {
            id: 4,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'Remarkable Resilience: Grace Kim',
            hasImage: false,
            hasData: true,
            image: '',
            data: 'A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.'
        },
        {
            id: 5,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'How To Wear The Lounge Lunghi',
            hasImage: true,
            hasData: false,
            image: '3.png',
            data: ''
        }
    ];
    return (
        <div className='explore-container'>

            <SectionTitle title='Explore' />

            <div className='explore-body'>
                <div className='explore-left'>
                    <News date='FIELDTESTED JANUARY 19, 2017' title='Connected Clothing: Raye Padit'>
                        <div className='news-body'>
                            <p>As a voice for conscious fashion, Raye Padit is
                                motivated by the belief that one person’s actions,
                                no matter how small, holds great impact. This core
                                ideal has driven him to start his three passion projects:
                                Connected Threads Asia, PeyaR, and Swagalls. </p>
                            <img src={require('./1.png')} alt='news 1' />
                        </div>
                    </News>
                </div>

                <div className='explore-right'>
                    {
                        news.map(item => {
                            return (
                                <News date={item.date} title={item.title}>
                                    <div className='news-body'>
                                        {item.hasData ? <p>{item.data}</p> : <></>}
                                        {item.hasImage ? <img src={require('./' + item.image)} alt={'news ' + item.id} /> : <></>}
                                    </div>
                                </News>
                            )
                        })
                    }

                </div>
            </div>
            <button>see the jounal</button>
        </div>
    );
}

export default Explore;