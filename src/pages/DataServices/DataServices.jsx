import { useDispatch } from 'react-redux';
import CrudModule from '@/modules/CrudModule/CrudModule';
import { CopyOutlined } from '@ant-design/icons';

import { crud } from '@/redux/crud/actions';
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

  return <CrudModule config={config} />;
}
