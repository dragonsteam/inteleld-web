import { useContext } from 'react';
import { Drawer } from 'antd';

import { CrudContext } from '@/context/crud';

export default function SidePanel({ config, topContent, bottomContent }) {
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
      {topContent}
      {bottomContent}
    </Drawer>
  );
}
