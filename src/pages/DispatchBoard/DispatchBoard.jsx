import { Layout, Table } from 'antd';

const columns = [
  {
    title: 'Driver',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Notes',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    sorter: true,
  },
  {
    title: 'Sturday',
    width: 150,
    dataIndex: 'address',
    key: '1',
    render: (record) => (
      <>
        {record}
        <div
          style={{
            position: 'absolute',
            background: 'lime',
            margin: '5px',
            padding: '5px',
            borderRadius: '5px',
            width: '200px',
            left: 120,
            top: 4,
            zIndex: 1,
            boxShadow: '2px 2px 0px grey',
            cursor: 'pointer',
          }}
        >
          tag
        </div>
      </>
    ),
  },
  {
    title: 'Monday',
    width: 150,
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Tuesday',
    width: 150,
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Wednesday',
    width: 150,
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Thursday',
    width: 150,
    dataIndex: 'address',
    key: '5',
  },
  {
    title: 'Friday',
    width: 150,
    dataIndex: 'address',
    key: '6',
  },
  {
    title: 'Saturday',
    width: 150,
    dataIndex: 'address',
    key: '7',
  },
  {
    title: 'Summary',
    key: 'operation',
    fixed: 'right',
    width: 180,
    render: () => <a>action</a>,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

export default function DispatchBoard() {
  return (
    <Layout.Content
      className="whiteBox shadow"
      style={{
        margin: '30px auto',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        flex: 'none',
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
        }}
        bordered
      />
    </Layout.Content>
  );
}
