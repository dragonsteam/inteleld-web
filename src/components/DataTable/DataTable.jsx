import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';

import { PageHeader } from '@ant-design/pro-layout';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { dataForTable } from '@/utils/dataStructure';
import { crud } from '@/redux/crud/actions';
import { selectListItems } from '@/redux/crud/selector';

function AddNewItem({ config }) {
  const { ADD_NEW_ENTITY } = config;

  return <Button type="primary">{ADD_NEW_ENTITY}</Button>;
}

export default function DataTable({ config }) {
  const { entity, DATATABLE_TITLE, fields } = config;

  const dispatch = useDispatch();

  let dataTableColumns = [];
  if (fields) dataTableColumns = [...dataForTable({ fields })];

  const { result: listResult, isLoading, listIsLoading } = useSelector(selectListItems);
  const { items: dataSource } = listResult;

  useEffect(() => {
    const controller = new AbortController();
    dispatch(crud.list({ entity }));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        backIcon={<ArrowLeftOutlined />}
        title={DATATABLE_TITLE}
        ghost={false}
        style={{
          padding: '20px 0px',
        }}
        extra={[<AddNewItem key="add-btn" config={config} />]}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        dataSource={dataSource}
        scroll={{ x: true }}
        rowKey={(item) => item.id}
      />
    </>
  );
}
