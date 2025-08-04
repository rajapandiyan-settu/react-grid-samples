import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridDefault() {
  const gridRef = useRef<GridRef>(null);
  const load = () => {
    console.log('load');
  }
  const created = () => {
    console.log('created');
  }
  const headerCellInfo = (args: any) => {
    console.log('headerCellInfo', args);
  }
  const rowDataBound = (args: any) => {
    console.log('rowDataBound', args);
  }
  const queryCellInfo = (args: any) => {
    console.log('queryCellInfo', args);
  }
  const beforeDataBound = (args: any) => {
    console.log('beforeDataBound', args);
  }
  const dataBound = () => {
    console.log('dataBound');
  }
  const pageChanging = (args: any) => {
    console.log('pageChanging', args);
  }
  const actionBegin = (args: any) => {
    console.log('actionBegin', args);
  }
  const pageChanged = (args: any) => {
    console.log('pageChanged', args);
  }
  const actionComplete = (args: any) => {
    console.log('actionComplete', args);
  }

  const footerMax = (props: any) => {
    return (<span>Max: {props.Max}</span>);
  };
  return (
    <>
      <div className="" style={{ padding: '20px 0 0 0' }}>
        <Grid
          ref={gridRef}
          dataSource={orderData}
          allowSorting={true}
          allowPaging={true}
          allowFiltering={true}
          toolbar={['Search']}
          onLoad={load}
          onCreated={created}
          // onHeaderCellInfo={headerCellInfo}
          // onRowDataBound={rowDataBound}
          // onQueryCellInfo={queryCellInfo}
          onBeforeDataBound={beforeDataBound}
          onDataBound={dataBound}
          onPageChanging={pageChanging}
          onActionBegin={actionBegin}
          onPageChanged={pageChanged}
          onActionComplete={actionComplete}
          height={300}
        >
          <Columns>
            <Column field='OrderID' isPrimaryKey={true} />
            <Column field='CustomerID' />
            <Column field='Freight'/>
            <Column field='OrderDate'  />
            <Column field='Verified' displayAsCheckBox={true} />
            <Column field='ShipCountry' />
            <Column field='ShipCity'  />
            <Column field='ShipAddress' />
            <Column field='ShipName' />
          </Columns>
          <Aggregates>
            <AggregateRow>
              <AggregateColumn field='Freight' type='Max' footerTemplate={footerMax} format={{ format: 'C2' }} />
            </AggregateRow>
          </Aggregates>
        </Grid>
      </div>
    </>
  )
}

export default GridDefault;
