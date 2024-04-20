import { useEffect, useState } from 'react';
import { Layout } from 'antd';

import SidePanel from '@/components/SidePanel/SidePanel';
import { CrudContextProvider } from '@/context/crud';
// import { useCrudContext } from '@/context/crud';
// import { useAppContext } from '@/context/appContext';

const { Content } = Layout;

const ContentBox = ({ children }) => {
  return (
    <Content
      className="whiteBox shadow layoutPadding"
      style={{
        margin: '30px auto',
        width: '100%',
        maxWidth: '100%',
        flex: 'none',
      }}
    >
      {children}
    </Content>
  );
};

export default function CrudLayout({ children, config }) {
  return (
    <>
      <CrudContextProvider>
        {/* <SidePanel
          config={config}
          topContent={sidePanelTopContent}
          bottomContent={sidePanelBottomContent}
          fixHeaderPanel={fixHeaderPanel}
        ></SidePanel> */}
        <SidePanel config={config} />

        <ContentBox> {children}</ContentBox>
      </CrudContextProvider>
    </>
  );
}
