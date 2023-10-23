/* eslint-disable no-unused-vars */
// material-ui
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { Table, Button } from 'antd';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';

const dataSource = [
  {
    key: '1',
    gymNo: '23344',
    name: 'Sylvester Arcades Gym',
    age: 32,
    createdAt: '3 days ago',
    location: 'Machakos',
    status: 'active',
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Gym No.',
    dataIndex: 'gymNo',
    key: 'gymNo'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },

  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location'
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Edit',
    dataIndex: '',
    key: 'x',
    render: () => <Button>Delete</Button>
  },

  {
    title: 'Delete',
    dataIndex: '',
    key: 'x',
    render: () => <Button danger>Delete</Button>
  }
];

const ComponentTypography = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
      <Button type="primary">New Gym</Button>
    </div>
    <Table dataSource={dataSource} columns={columns} />
  </>
);

export default ComponentTypography;
