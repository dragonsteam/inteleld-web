import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm/DynamicForm';
import { fields } from './config';

export default function Users() {
  const config = {
    PANEL_TITLE: 'Users',
    DATATABLE_TITLE: 'Users List',
    ADD_NEW_ENTITY: 'Add New User',
    ENTITY_NAME: 'user',
    entity: 'users',
    fields,
  };

  return (
    <CrudModule
      config={config}
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
    />
  );
}
