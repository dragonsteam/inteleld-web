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
import { useCrudContext } from '@/context/crud';

function AddNewItem({ config }) {
  const { crudContextAction } = useCrudContext();
  const { panel } = crudContextAction;
  const { ADD_NEW_ENTITY } = config;

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
  const dispatch = useDispatch();

  const {
    entity,
    DATATABLE_TITLE,
    fields,
    extra_dropdown_items: extra = [],
    extra_dropdown_handlers: extra_handlers = {},
  } = config;
  const { crudContextAction } = useCrudContext();
  const { modal, panel } = crudContextAction;

  const items = [
    {
      label: 'Show',
      key: 'view',
      icon: <EyeOutlined />,
    },
    {
      label: 'Edit',
      key: 'edit',
      icon: <EditOutlined />,
    },
    ...extra,
    {
      type: 'divider',
    },

    {
      label: 'Delete',
      key: 'delete',
      icon: <DeleteOutlined />,
    },
  ];

  // actions in dropdown //
  const handleView = (record) => {};
  const handleEdit = (record) => {};
  const handleDelete = (record) => {
    dispatch(crud.currentAction({ actionType: 'delete', data: record }));
    modal.open();
  };

  // prepare dropdown handlers
  const dropdownHandlers = {
    view: handleView,
    edit: handleEdit,
    delete: handleDelete,
  };
  // add extra handlers
  for (const key of Object.keys(extra_handlers)) dropdownHandlers[key] = extra_handlers[key];

  const onDropdownClick = ({ key, record }) => {
    const handler = dropdownHandlers[key];
    if (handler) handler(record);
    else console.log('!!! handler not found !!!', dropdownHandlers);
  };

  let dispatchColumns = [];
  if (fields) dispatchColumns = [...dataForTable({ fields })];

  let dataTableColumns = [
    ...dispatchColumns,
    {
      title: '',
      key: 'action',
      fixed: 'right',
      render: (_, record) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => onDropdownClick({ key, record }),
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
  const { items: dataSource, pagination } = listResult;

  const handleDataTableLoad = (pagination) => {
    const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
    dispatch(crud.list({ entity, options }));
  };

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
        extra={[
          <Button onClick={handleDataTableLoad} key="refresh-btn" icon={<RedoOutlined />}>
            Refresh
          </Button>,
          <AddNewItem key="add-btn" config={config} />,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey={(item) => item.id}
        dataSource={dataSource}
        pagination={{ ...pagination, showSizeChanger: false }}
        onChange={handleDataTableLoad}
        loading={listIsLoading}
        scroll={{ x: true }}
      />
    </>
  );
}
