import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm/DynamicForm';
import { fields } from './config';

export default function Drivers() {
  const config = {
    PANEL_TITLE: 'Truck',
    DATATABLE_TITLE: 'Truck List',
    ADD_NEW_ENTITY: 'Add New Truck',
    ENTITY_NAME: 'truck',
    entity: 'trucks',
    fields,
    // searchConfig: {
    //   displayLabels: ['firstname', 'lastname'],
    //   searchFields: 'firstname,lastname,email',
    // },
    // deleteModalLabels: ['firstname', 'lastname'],
  };

  return (
    <CrudModule
      config={config}
      createForm={<DynamicForm fields={fields} />}
      // updateForm={<DynamicForm fields={fields} />}
    />
  );
}
