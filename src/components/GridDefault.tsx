import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'

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
          sortSettings={{ enabled: true }}
          pageSettings={{ enabled: true }}
          filterSettings={{ enabled: true }}
          searchSettings={{ enabled: true }}
          toolbar={['Search']}
          onLoad={load}
          onGridInit={created}
          onDataLoadStart={beforeDataBound}
          onDataLoaded={dataBound}
          onPageChangeStart={pageChanging}
          onPageChangeComplete={pageChanged}
          height={300}
        >
          <Columns>
            <Column field='OrderID' headerText='Order ID' isPrimaryKey={true} validationRules={{ required: true }} textAlign='Right' width='100' />
            <Column field='CustomerID' headerText='Customer ID' width='120' validationRules={{ required: true }} />
            <Column field='Freight' headerText='Freight' width='130' format='C2' textAlign='Right' />
            <Column field='OrderDate' headerText='Order Date' width='130' type='date' edit={{ type: 'datepickeredit' }} format='yMd' textAlign='Right' />
            <Column field='ShipCountry' headerText='Ship Country' width='140' />
            <Column field='ShipCity' headerText='Ship City' width='120' />
            <Column field='ShipAddress' headerText='Ship Address' width='160' />
            <Column field='ShipName' headerText='Ship Name' width='140' />
            <Column field="Verified" headerText="Verified" edit={{ type: "booleanedit" }} width="90" displayAsCheckBox={true} />
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
