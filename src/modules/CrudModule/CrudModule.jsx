import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateForm from '@/forms/crud/CreateForm';
import UpdateForm from '@/forms/crud/UpdateForm';
import DataTable from '@/components/DataTable/DataTable';
import DeleteModal from '@/components/DeleteModal/DeleteModal';
import { crud } from '@/redux/crud/actions';
import { CrudLayout } from '@/layout';

function CrudModule({ config, createForm, updateForm }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout
      config={config}
      sidePanelTopContent={<UpdateForm config={config} formElements={updateForm} />}
      sidePanelBottomContent={<CreateForm config={config} formElements={createForm} />}
    >
      <DataTable config={config} />
      <DeleteModal config={config} />
    </CrudLayout>
  );
}

export default CrudModule;
