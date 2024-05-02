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
  const {
    entity,
    DATATABLE_TITLE,
    fields,
    extra_dropdown_items: extra = [],
    extra_dropdown_handlers: extra_handlers = {},
  } = config;
  const { currentAction, deleteModal } = useContext(CrudContext);

  const dispatch = useDispatch();

  let dataTableColumns = [];
  if (fields) dataTableColumns = [...dataForTable({ fields })];

  // actions in dropdown //
  const handleView = (record) => {};
  const handleEdit = (record) => {};
  const handleDelete = (record) => {
    currentAction.set('delete', record);
    deleteModal.open();
  };

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
