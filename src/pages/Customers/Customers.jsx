import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm/DynamicForm';
import { fields } from './config';

export default function Customers() {
  const config = {
    PANEL_TITLE: 'Customer',
    DATATABLE_TITLE: 'Customer List',
    ADD_NEW_ENTITY: 'Add New Customer',
    ENTITY_NAME: 'customer',
    entity: 'customers',
    fields,
  };

  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      // updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
