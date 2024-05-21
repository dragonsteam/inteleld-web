import { Drawer } from 'antd';

import { useCrudContext } from '@/context/crud';

export default function SidePanel({ config, topContent, bottomContent }) {
  const { state, crudContextAction } = useCrudContext();
  const { isPanelClose } = state;
  const { panel } = crudContextAction;

  const { PANEL_TITLE } = config;

  return (
    <Drawer
      title={PANEL_TITLE}
      placement="right"
      onClose={() => {
        panel.close();
      }}
      open={!isPanelClose}
      width={450}
    >
      {topContent}
      {bottomContent}
    </Drawer>
  );
}
