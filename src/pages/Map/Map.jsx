import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { Layout, Button, Flex } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { map } from '@/redux/map/actions';
import { selectSidePanelOpen } from '@/redux/map/selector';
import SidePanel from './SidePanel';

export default function Map() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(map.listTrucks());
  }, []);

  const isSidePanelOpen = useSelector(selectSidePanelOpen);

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
        height: '100%',
        maxWidth: '100%',
        flex: 'none',
      }}
    >
      {/* MAP */}
      <div style={{ width: '100%', height: '100%' }}>
        <MapContainer center={[40, -100]} zoom={5}>
          <TileLayer attribution="none" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <Marker position={[40.505, -100.09]}>
          <Popup>I am a pop-up!</Popup>
        </Marker> */}
          <Polyline pathOptions={{ color: '#0377fc' }} positions={getRoutePolyline()} />
        </MapContainer>
      </div>

      {isSidePanelOpen && <SidePanel />}

      <Button
        className="open-list-btn shadow"
        icon={<RightOutlined />}
        // iconPosition="end"
        onClick={() => {
          dispatch(map.sidePanel('open'));
        }}
      >
        Show List
      </Button>
    </Layout.Content>
  );
}
