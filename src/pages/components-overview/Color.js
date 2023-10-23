import PropTypes from 'prop-types';

// material-ui
import { Card } from '@mui/material';

import { Table, Button } from 'antd';

const dataSource = [
  {
    key: '1',
    userID: '23344',
    name: 'Alex Maina',
    age: 32,
    createdAt: '3 days ago',
    location: 'Machakos',
    status: 'active',
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'User ID',
    dataIndex: 'userID',
    key: 'userID'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },

  {
    title: 'Date Joined',
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

function ColorBox() {
  return (
    <>
      <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}></Card>
    </>
  );
}

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
  dark: PropTypes.bool,
  main: PropTypes.bool
};

// ===============================|| COMPONENT - COLOR ||=============================== //

const ComponentColor = () => <Table dataSource={dataSource} columns={columns} />;

export default ComponentColor;
