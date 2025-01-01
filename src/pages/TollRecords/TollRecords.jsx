import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Table, Flex, Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import { toll } from '@/redux/toll/actions';
import { selectRecordsList } from '@/redux/toll/selector';

const getErrorsMsg = (errors) => {
  const errorsMap = {
    I: 'Record is invalid',
    T: 'Truck with the plate is not found',
  };

  const errorArray = errors.split('');

  return errorArray.map((error, index) => (
    <p key={index} style={{ color: '#f5222d' }}>
      {errorsMap[error] || `Unknown Error: ${error}`}
    </p>
  ));
};

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
    width: 50,
    render: (_, __, index) => index + 1, // Display row number
  },
  { title: 'License Plate', dataIndex: 'licence_plate' },
  { title: 'License State', dataIndex: 'licence_state' },
  { title: 'Unit', dataIndex: 'unit' },
  { title: 'Entry Date', dataIndex: 'entry_date' },
  { title: 'Entry Time', dataIndex: 'entry_time' },
  { title: 'Entry Plaza Name', dataIndex: 'entry_plaza_name' },
  { title: 'Entry Google Address Name', dataIndex: 'entry_address_google' },
  { title: 'Entry Google Lat', dataIndex: 'entry_location_google_lat' },
  { title: 'Entry Google Lng', dataIndex: 'entry_location_google_lng' },
  { title: 'Entry Samsara Address Name', dataIndex: 'entry_address_samsara' },
  { title: 'Entry Samsara Lat', dataIndex: 'entry_location_samsara_lat' },
  { title: 'Entry Samsara Lng', dataIndex: 'entry_location_samsara_lng' },
  { title: 'Exit Date', dataIndex: 'exit_date' },
  { title: 'Exit Time', dataIndex: 'exit_time' },
  { title: 'Exit Plaza Name', dataIndex: 'exit_plaza_name' },
  { title: 'Exit Google Address Name', dataIndex: 'exit_address_google' },
  { title: 'Exit Google Lat', dataIndex: 'exit_location_google_lat' },
  { title: 'Exit Google Lng', dataIndex: 'exit_location_google_lng' },
  { title: 'Exit Samsara Address Name', dataIndex: 'exit_address_samsara' },
  { title: 'Exit Samsara Lat', dataIndex: 'exit_location_samsara_lat' },
  { title: 'Exit Samsara Lng', dataIndex: 'exit_location_samsara_lng' },
  {
    title: 'Errors',
    dataIndex: 'errors',
    width: 60,
    fixed: 'right',
    render: (value, __) => {
      if (!value) return <></>;
      return (
        <Popover placement="leftTop" title="errors" content={getErrorsMsg(value)}>
          <InfoCircleOutlined style={{ color: '#f5222d' }} />
        </Popover>
      );
    },
  },
];

export default function TollRecords() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toll.listRecords(id));
  }, []);

  const recordsList = useSelector(selectRecordsList);

  return (
    <Layout.Content
      className="toll whiteBox shadow"
      style={{
        margin: '30px auto',
      }}
    >
      <Table
        columns={columns}
        dataSource={recordsList}
        pagination={{
          pageSize: 100, // Default page size
          showSizeChanger: true, // Allow users to change page size
          pageSizeOptions: ['50', '100', '200', '500', '1000'], // Page size options
        }}
        scroll={{ x: 'max-content', y: '80vh' }}
      />
    </Layout.Content>
  );
}
