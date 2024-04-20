import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';

import { CrudContext } from '@/context/crud';
import { crud } from '@/redux/crud/actions';

export default function DeleteModal({ config }) {
  const dispatch = useDispatch();

  const { deleteModal, currentAction } = useContext(CrudContext);
  const { entity } = config;

  const handleOK = () => {
    const { id } = currentAction.current.entity;
    dispatch(crud.delete({ entity, id }));
    dispatch(crud.list({ entity }));
    deleteModal.close();
  };

  const handleCancel = () => {
    deleteModal.close();
  };

  return (
    <Modal
      title="Delete Confirmation"
      open={deleteModal.isOpen}
      onOk={handleOK}
      onCancel={handleCancel}
    >
      <p>Are You Sure You Want To Delete? This CANNOT BE Undone</p>
    </Modal>
  );
}
