import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Image display page</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Waterfall'
              label='1'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Tourism'
              label='2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Ocean'
              label='3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Football on Top of Mountains'
              label='4'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Sahara Desert'
              label='5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;