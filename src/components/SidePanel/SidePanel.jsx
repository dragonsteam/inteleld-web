import { useContext } from 'react';
import { Drawer } from 'antd';

import { CrudContext } from '@/context/crud';
import DynamicForm from '@/forms/DynamicForm/DynamicForm';

export default function SidePanel({ config }) {
  const { panel } = useContext(CrudContext);

  const { PANEL_TITLE } = config;

  return (
    <Drawer
      title={PANEL_TITLE}
      placement="right"
      onClose={() => {
        panel.collapse();
      }}
      open={panel.isOpen}
    >
      <DynamicForm config={config} />
    </Drawer>
  );
}
