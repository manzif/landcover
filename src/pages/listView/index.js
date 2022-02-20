import React from 'react';
import DefaultLayout from '../../layouts/default'
import { isNil, isEmpty } from 'lodash'
import { renderTable } from '../../common/listView'

export default function ListView({ data, selectedType, handleListItemSelection }) {
  return (
    <DefaultLayout>
      <div className='listview-wrapper'>
        {!isNil(data) && !isEmpty(data) ? renderTable(data, selectedType, handleListItemSelection) : 'No data'}
      </div>
    </DefaultLayout>
  )
}
