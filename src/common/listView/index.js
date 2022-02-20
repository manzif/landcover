import React from "react";
import Table from 'react-bootstrap/Table'
import { isEmpty, isNil } from 'lodash'
import styled from '@emotion/styled'

const TableWrapper = styled.div`
  padding: 1rem;
`
export const menuItems = [
  {
    label:
      'all entries', key: 'all'
  }, { label: 'pothole', key: 'pothole' },
  { label: 'longitudinal', key: 'longitudinal' },
  { label: 'alligator', key: 'alligator' }];
export const renderTable = (data, selectedType, handleListItemSelection) => {
  let filteredData = data;
  if (!isEmpty(selectedType) && selectedType !== 'all') {
    filteredData = data.filter(item => item.damageType === selectedType);
  }
  return (
    <TableWrapper className='container-shadow'>
      <p className='text-uppercase'>Recorded Road Damage Entries</p>
      <ul className='d-flex flex-wrap list-style-none damage-type-list'>
        {menuItems.map((item, idx) => <li name={item.key} className={`menu-item`} onClick={handleListItemSelection} key={idx}>{item.label}</li>)}
      </ul>
      <Table responsive striped className='full-width rdd-table'>
        <thead>
          <tr>
            <th className='text-left'>#</th>
            <th className='text-left'>Image</th>
            <th className='text-left'>Type</th>
            <th className='text-left'>Latitude</th>
            <th className='text-left'>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {!isNil(filteredData) && !isEmpty(filteredData) &&
            filteredData.map((entry, i) =>
              <tr key={i}>
                <td>{i + 1}</td>
                <td><div className='thumbnail position-relative'><img className='position-absolute fill-relative-parent' alt='damage thumbnail' src='https://source.unsplash.com/random/?road' /></div></td>
                <td>{entry.damageType}</td>
                <td>{entry.coordinates[0]}</td>
                <td>{entry.coordinates[1]}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </TableWrapper>
  )
}