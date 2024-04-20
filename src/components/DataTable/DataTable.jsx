import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Dropdown } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  RedoOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';

import { dataForTable } from '@/utils/dataStructure';
import { crud } from '@/redux/crud/actions';
import { selectListItems } from '@/redux/crud/selector';
import { CrudContext } from '@/context/crud';

function AddNewItem({ config }) {
  const { ADD_NEW_ENTITY } = config;
  const { panel } = useContext(CrudContext);

  return (
    <Button
      type="primary"
      onClick={() => {
        panel.open();
      }}
    >
      {ADD_NEW_ENTITY}
    </Button>
  );
}

export default function DataTable({ config }) {
  const { entity, DATATABLE_TITLE, fields } = config;
  const { currentAction, deleteModal } = useContext(CrudContext);

  const dispatch = useDispatch();

  let dataTableColumns = [];
  if (fields) dataTableColumns = [...dataForTable({ fields })];

  // actions in table //
  const items = [
    {
      label: 'Show',
      key: 'read',
      icon: <EyeOutlined />,
    },
    {
      label: 'Edit',
      key: 'edit',
      icon: <EditOutlined />,
    },
    // ...extra,
    {
      type: 'divider',
    },

    {
      label: 'Delete',
      key: 'delete',
      icon: <DeleteOutlined />,
    },
  ];
  const handleRead = (record) => {};
  const handleEdit = (record) => {};
  const handleDelete = (record) => {
    console.log('handle delete: ', record);
    currentAction.set('delete', record);
    deleteModal.open();
  };
  const handleUpdatePassword = (record) => {};
  dataTableColumns = [
    ...dataTableColumns,
    {
      title: '',
      key: 'action',
      fixed: 'right',
      render: (_, record) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => {
              switch (key) {
                case 'read':
                  handleRead(record);
                  break;
                case 'edit':
                  handleEdit(record);
                  break;

                case 'delete':
                  handleDelete(record);
                  break;
                case 'updatePassword':
                  handleUpdatePassword(record);
                  break;

                default:
                  break;
              }
              // else if (key === '2')handleCloseTask
            },
          }}
          trigger={['click']}
        >
          <EllipsisOutlined
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      ),
    },
  ];
  ///////

  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);
  const { items: dataSource } = listResult;

  useEffect(() => {
    const controller = new AbortController();
    dispatch(crud.list({ entity }));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        backIcon={<ArrowLeftOutlined />}
        title={DATATABLE_TITLE}
        ghost={false}
        style={{
          padding: '20px 0px',
        }}
        extra={[<AddNewItem key="add-btn" config={config} />]}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey={(item) => item.id}
        dataSource={dataSource}
        loading={listIsLoading}
        scroll={{ x: true }}
      />
    </>
  );
}
