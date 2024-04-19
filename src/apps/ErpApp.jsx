import { Layout } from 'antd';

import AppRouter from '@/router/AppRouter';
import Navigation from '@/apps/Navigation/NavigationContainer';
export default function ErpApp() {
  const { Content } = Layout;

  return (
    <Layout>
      <Navigation />
      <Content
        style={{
          margin: '40px auto 30px',
          overflow: 'initial',
          width: '100%',
          padding: '0 50px',
          maxWidth: 1400,
          // background: 'green',
        }}
      >
        <AppRouter />
      </Content>
    </Layout>
  );
}
