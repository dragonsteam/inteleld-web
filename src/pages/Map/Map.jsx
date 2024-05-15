import { useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { Layout, Button, Flex } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function Map() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const getRoutePolyline = () => {
    const polyline = [].map((point) => [point.latitude, point.longitude]);
    return polyline;
  };

  const sidePanelConfig = {
    PANEL_TITLE: 'All Units',
  };

  return (
    <Layout.Content
      className="whiteBox shadow map"
      style={{
        margin: '30px auto',
        width: '100%',
        maxWidth: '100%',
        flex: 'none',
      }}
    >
      {/* MAP */}
      <div style={{ width: '100%', aspectRatio: '16/9' }}>
        <MapContainer center={[40, -100]} zoom={5}>
          <TileLayer attribution="none" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <Marker position={[40.505, -100.09]}>
          <Popup>I am a pop-up!</Popup>
        </Marker> */}
          <Polyline pathOptions={{ color: '#0377fc' }} positions={getRoutePolyline()} />
        </MapContainer>
      </div>

      {/* SIDE */}
      {isSideOpen && (
        <div className="map-side shadow">
          <Flex justify="space-between" align="center" style={{ padding: '0 20px' }}>
            <h3>All Units List</h3>
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={() => {
                setIsSideOpen(false);
              }}
            ></Button>
          </Flex>
        </div>
      )}

      <Button
        className="open-list-btn shadow"
        icon={<RightOutlined />}
        // iconPosition="end"
        onClick={() => {
          setIsSideOpen(true);
        }}
      >
        Show List
      </Button>
    </Layout.Content>
  );
}
