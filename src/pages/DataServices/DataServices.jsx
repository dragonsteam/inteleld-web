import { useDispatch } from 'react-redux';
import { CopyOutlined } from '@ant-design/icons';

import CrudModule from '@/modules/CrudModule/CrudModule';
import { crud } from '@/redux/crud/actions';
import DynamicForm from '@/forms/DynamicForm/DynamicForm';
import { fields } from './config';

export default function DataServices() {
  const dispatch = useDispatch();
  const handleSyncData = (record) => {
    dispatch(crud.syncData({ entity: 'services', id: record.id }));
  };

  const extra_dropdown_items = [
    {
      label: 'Sync Data',
      key: 'sync',
      icon: <CopyOutlined />,
    },
  ];

  const extra_dropdown_handlers = { sync: handleSyncData };

  ////

  const config = {
    PANEL_TITLE: 'Data Services',
    DATATABLE_TITLE: 'Data Service List',
    ADD_NEW_ENTITY: 'Add New Service',
    ENTITY_NAME: 'services',
    entity: 'services',
    fields,
    extra_dropdown_items,
    extra_dropdown_handlers,
  };

  return (
    <CrudModule
      config={config}
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
    />
  );
}
