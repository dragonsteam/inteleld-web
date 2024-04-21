import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { CrudContext } from '@/context/crud';
import { crud } from '@/redux/crud/actions';
import { selectDeletedItem } from '@/redux/crud/selector';

export default function DeleteModal({ config }) {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectDeletedItem);

  const { deleteModal, currentAction } = useContext(CrudContext);
  const { entity } = config;

  const handleOK = () => {
    const { id } = currentAction.current.entity;
    dispatch(crud.delete({ entity, id }));
  };

  useEffect(() => {
    if (isSuccess) {
      deleteModal.close();
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  const handleCancel = () => {
    if (!isLoading) deleteModal.close();
  };

  return (
    <Modal
      title="Delete Confirmation"
      open={deleteModal.isOpen}
      onOk={handleOK}
      onCancel={handleCancel}
      confirmLoading={isLoading}
    >
      <p>Are You Sure You Want To Delete? This CANNOT BE Undone</p>
    </Modal>
  );
}
