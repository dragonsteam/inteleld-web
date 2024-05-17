import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Button, Flex } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import { map } from '@/redux/map/actions';
import { selectSidePanelOpen, selectTrucksList } from '@/redux/map/selector';
import SidePanel from './SidePanel';

import record_image from '@/assets/record.png';

const RecordIcon = new Icon({
  iconUrl: record_image,
  iconSize: [26, 26],
});

export default function Map() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(map.listTrucks());
  }, []);

  const trucksList = useSelector(selectTrucksList);
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
      className="map whiteBox shadow"
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
          {trucksList.map((truck) => {
            const { latest_trackpoint: point } = truck;
            if (point)
              return (
                <Marker position={[point.latitude, point.longitude]} icon={RecordIcon}></Marker>
              );
            return;
          })}

          {/* <Polyline pathOptions={{ color: '#0377fc' }} positions={getRoutePolyline()} /> */}
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
