/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { CTable } from '@coreui/react'

const SelectCourses = () => {
  const [selectedCourses, setSelectCourse] = useState('');
  const columns = [
    {
        key: 'id',
        label: '#',
        _props: { scope: 'col' },
    },
    {
        key: 'Course',
        _props: { scope: 'col' },
    },
    {
        key: 'ClassType',
        label: 'Class Type',
        _props: { scope: 'col' },
    },
    {
        key: 'Session',
        _props: { scope: 'col' },
    },
    {
        key: 'Units',
        _props: { scope: 'col' },
    },
  ]
  const items = [
    {
        id: 1,
        Course: 'CS2030S',
        ClassType: 'Lecture',
        Session: '1',
        Units: '4.0',
        _cellProps: { id: { scope: 'row' } },
    },
    {
        id: 2,
        Course: 'CS2040S',
        ClassType: 'Lecture',
        Session: '1',
        Units: '4.0',
        _cellProps: { id: { scope: 'row' } },
    },
    {
        id: 3,
        Course: 'CS2100',
        ClassType: 'Lecture',
        Session: '1',
        Units: '4.0',
        _cellProps: { id: { scope: 'row' } },
    },
    {
        id: 4,
        Course: 'MA1521',
        ClassType: 'Lecture',
        Session: '1',
        Units: '4.0',
        _cellProps: { id: { scope: 'row' } },
    },
    {
        id: 5,
        Course: 'MA1522',
        ClassType: 'Lecture',
        Session: '1',
        Units: '4.0',
        _cellProps: { id: { scope: 'row' } },
    },
    {
        id: 6,
        Course: 'GAM7777',
        ClassType: 'Lecture',
        Session: '1',
        Units: '4.0',
        _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <>
        <h1>Following are the courses you chose to gamble for:</h1>
        <CTable columns={columns} items={items} />
    </>
  )
}

export default SelectCourses
