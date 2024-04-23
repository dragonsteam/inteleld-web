import { MapContainer, TileLayer } from 'react-leaflet';
import { Layout } from 'antd';

export default function Map() {
  return (
    <Layout.Content
      className="whiteBox shadow"
      style={{
        margin: '30px auto',
        width: '100%',
        maxWidth: '100%',
        flex: 'none',
      }}
    >
      <div style={{ width: '100%', aspectRatio: '16/9' }}>
        <MapContainer center={[40, -100]} zoom={5}>
          <TileLayer attribution="none" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <Marker position={[40.505, -100.09]}>
          <Popup>I am a pop-up!</Popup>
        </Marker> */}
        </MapContainer>
      </div>
    </Layout.Content>
  );
}
