import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'Pin',
    content: 'This is Pin'
  },
  {
    title: 'Miu',
    content: 'This is Miu'
  },
  {
    title: 'What a nice suprise !',
    content: 'Bring your allabi'
  }
]

export default () => {
  return (
    <div>
      <br/>
      <Accordion items={items}/>
    </div>
  )
};
