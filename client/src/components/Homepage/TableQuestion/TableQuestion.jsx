import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useSelector } from 'react-redux';

const TableQuestion = () => {
  const questions = useSelector(state => state.questions)

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Question',
      dataIndex: 'question',
      
    },
    {
      title: 'Price',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
    },
  ];
  
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //   },
  //   {
  //     key: '4',
  //     name: 'Jim Red',
  //     age: 32,
  //     address: 'London No. 2 Lake Park',
  //   },
  // ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  
  return (
    <>
      <Table columns={columns} dataSource={questions} onChange={onChange} />
    </>
  )
}

export default TableQuestion




