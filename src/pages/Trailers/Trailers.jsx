import CrudModule from '@/modules/CrudModule/CrudModule';
import { fields } from './config';

export default function Trailers() {
  const config = {
    PANEL_TITLE: 'Trailers',
    DATATABLE_TITLE: 'Trailer List',
    ADD_NEW_ENTITY: 'Add New Trailer',
    ENTITY_NAME: 'trailers',
    entity: 'trailers',
    fields,
  };

  return <CrudModule config={config} />;
}
