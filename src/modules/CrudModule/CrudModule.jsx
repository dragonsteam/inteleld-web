import { useDispatch, useSelector } from 'react-redux';

import DataTable from '@/components/DataTable/DataTable';
import DeleteModal from '@/components/DeleteModal/DeleteModal';
import { CrudLayout } from '@/layout';

function CrudModule({ config, createForm, updateForm }) {
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   dispatch(crud.resetState());
  // }, []);

  return (
    <CrudLayout config={config}>
      <DataTable config={config} />
      <DeleteModal config={config} />
    </CrudLayout>
  );
}

export default CrudModule;
