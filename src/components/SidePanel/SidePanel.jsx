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
        panel.close();
      }}
      open={panel.isOpen}
      width={450}
    >
      <DynamicForm config={config} />
    </Drawer>
  );
}
