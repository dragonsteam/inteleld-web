import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { useCrudContext } from '@/context/crud';
import { crud } from '@/redux/crud/actions';
import { selectDeletedItem } from '@/redux/crud/selector';

export default function DeleteModal({ config }) {
  const dispatch = useDispatch();
  const { entity } = config;
  const { current, isLoading, isSuccess } = useSelector(selectDeletedItem);
  const { state, crudContextAction } = useCrudContext();
  const { panel, modal } = crudContextAction;
  const { isModalOpen } = state;

  useEffect(() => {
    if (isSuccess) {
      modal.close();
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  const handleOK = () => {
    const id = current.id;
    dispatch(crud.delete({ entity, id }));
    modal.close();
    panel.close();
  };

  const handleCancel = () => {
    if (!isLoading) modal.close();
  };

  return (
    <Modal
      title="Delete Confirmation"
      open={isModalOpen}
      onOk={handleOK}
      onCancel={handleCancel}
      confirmLoading={isLoading}
    >
      <p>Are You Sure You Want To Delete? This CANNOT BE Undone</p>
    </Modal>
  );
}
