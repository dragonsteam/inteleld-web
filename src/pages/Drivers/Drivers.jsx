import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm/DynamicForm';
import { fields } from './config';

export default function Drivers() {
  const config = {
    PANEL_TITLE: 'Driver',
    DATATABLE_TITLE: 'Driver List',
    ADD_NEW_ENTITY: 'Add New Driver',
    ENTITY_NAME: 'driver',
    entity: 'drivers',
    fields,
    searchConfig: {
      displayLabels: ['firstname', 'lastname'],
      searchFields: 'firstname,lastname,email',
    },
    deleteModalLabels: ['firstname', 'lastname'],
  };

  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      // updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
