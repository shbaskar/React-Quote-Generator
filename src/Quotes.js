import React, { useState } from 'react'

export default function Quotes() {
    const [value, setValue] = useState('You miss 100% of the shots you don\'t take.');
    const data = [
        {
            id: '1',
            'quote': 'We must balance conspicuous consumption with conscious capitalism.'
        },
        {
            id: '2',
            'quote': 'Life isn\'t about getting and having, it\'s about giving and being.'
        },
        {
            id: '3',
            'quote': 'Strive not to be a success, but rather to be of value'
        },
        {
            id: '4',
            'quote': 'Definiteness of purpose is the starting point of all achievement.'
        },
        {
            id: '5',
            'quote': 'You miss 100% of the shots you don\'t take.'
        },
        {
            id: '6',
            'quote': 'I\'ve missed more than 9000 shots in my career.I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed.I\'ve failed over and over and over again in my life. And that is why I succeed.'
        },
        {
            id: '7',
            'quote': 'Whatever the mind of man can conceive and believe, it can achieve.'
        },
        {
            id: '8',
            'quote': 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.'
        },
        {
            id: '9',
            'quote': 'Life is what happens to you while you\'re busy making other plans.'
        },
        {
            id: '10',
            'quote': 'Life isn\'t about getting and having, it\'s about giving and being.'
        },
        {
            id: '11',
            'quote': 'The most difficult thing is the decision to act, the rest is merely tenacity.'
        },
        {
            id: '12',
            'quote': 'I attribute my success to this: I never gave or took any excuse.'
        },
    ];
    const handleClick = () => {
        let randomValue = Math.floor(Math.random() * 11) + 1;
        console.log(randomValue);
        setValue(data[randomValue].quote);
    }
    return (
        <div className='main-quotes'>
            <div className='displaying-quotes'>
                <div className='data-display'>
                    <p className='p-tag' key={data.id}>{value}
                    </p>
                    <button className='btn' onClick={handleClick}>Change Quote</button>
                </div>
            </div>

        </div>
    )
}
