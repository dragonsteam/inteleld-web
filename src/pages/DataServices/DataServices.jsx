import CrudModule from '@/modules/CrudModule/CrudModule';
import { fields } from './config';

export default function DataServices() {
  const config = {
    PANEL_TITLE: 'Data Services',
    DATATABLE_TITLE: 'Data Service List',
    ADD_NEW_ENTITY: 'Add New Service',
    ENTITY_NAME: 'services',
    entity: 'services',
    fields,
  };

  return <CrudModule config={config} />;
}
