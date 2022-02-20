import { isEmpty, isNil } from 'lodash';
import React from 'react';
import './index.css';

export default function Card({ cardTitle, cardContent, exception, bodyType }) {
  const damageTypeArr = [];
  if (!isNil(cardContent) && !isEmpty(cardContent)) {
    cardContent.map(item =>
      damageTypeArr.push(item.damageType)
    )
  }
  const countOccurences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  return (
    <div className='card-wrapper d-flex flex-column rounded-corners container-shadow text-center'>
      <div className='card-header d-flex align-items-center justify-content-center'>
        <p className='text-capitalize no-margin'>{cardTitle}</p>
      </div>
      <div className={`card-body d-flex align-items-center justify-content-center ${bodyType}`}>
        {cardTitle === exception ? cardContent.length : countOccurences(damageTypeArr, cardTitle)}
      </div>
    </div>
  )
}
