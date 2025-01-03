import { Layout } from 'antd';

const CoverLetter = () => {
  return (
    <Layout.Content
      className="whiteBox shadow layoutPadding"
      style={{
        margin: '30px auto',
        width: '100%',
        maxWidth: '100%',
        flex: 'none',
      }}
    >
      <h1>Welcome</h1>
      <p>
        This web server/service is currently under development. In case any issues, contact
        azizbek2018arb@gmail.com or nickphilomath@gmail.com.
      </p>
    </Layout.Content>
  );
};

export default CoverLetter;
