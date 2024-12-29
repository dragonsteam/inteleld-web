import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm/DynamicForm';
import { fields } from './config';

export default function TollReports() {
  const config = {
    PANEL_TITLE: 'Toll Reports',
    DATATABLE_TITLE: 'Toll Reports List',
    ADD_NEW_ENTITY: 'Add New Report',
    ENTITY_NAME: 'report',
    entity: 'toll-reports',
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
      updateForm={<DynamicForm fields={fields} />}
    />
  );
}
