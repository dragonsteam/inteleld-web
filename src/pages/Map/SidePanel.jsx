import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, List } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import { map } from '@/redux/map/actions';
import { selectTrucksList } from '@/redux/map/selector';

const SidePanel = () => {
  const dispatch = useDispatch();
  const trucksList = useSelector(selectTrucksList);

  return (
    <div
      className="map-side shadow"
      style={{ padding: '0 20px', overflow: 'auto', scrollbarWidth: 'none' }}
    >
      <Flex justify="space-between" align="center">
        <h3>All Units List</h3>
        <Button
          shape="circle"
          icon={<LeftOutlined />}
          onClick={() => {
            dispatch(map.sidePanel('close'));
          }}
        ></Button>
      </Flex>
      <div>
        <List
          dataSource={trucksList}
          renderItem={(truck) => <List.Item>{truck.unit_number}</List.Item>}
        />
      </div>
    </div>
  );
};

export default SidePanel;
