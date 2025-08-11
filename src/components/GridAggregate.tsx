import { useRef, useState } from 'react'
import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { orderData } from '../dataSource';

function GridAggregate() {

  const footerMax = (props: any) => {
    return (<span>Max: {props.Max}</span>);
  };
  return (
    <>

      <div className="" style={{ padding: '20px 0 0 0' }}>
        <Grid
          dataSource={orderData}
          allowSorting={true}
          allowPaging={true}
          allowFiltering={true}
          allowSearching={true}
          toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
          editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
          height={300}
        >
          <Columns>
            <Columns>
              <Column field='OrderID' headerText='Order ID' isPrimaryKey={true} validationRules={{ required: true }} textAlign='Right' width='100' />
              <Column field='CustomerID' headerText='Customer ID' width='120' validationRules={{ required: true }} />
              <Column field='Freight' headerText='Freight' width='130' format='C2' textAlign='Right' />
              <Column field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' />
              {/* <Column field='Verified' headerText='Verified' width='100' /> */}
              <Column field='ShipCountry' headerText='Ship Country' width='140' />
              <Column field='ShipCity' headerText='Ship City' width='120' />
              <Column field='ShipAddress' headerText='Ship Address' width='160' />
              <Column field='ShipName' headerText='Ship Name' width='140' />
            </Columns>
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

export default GridAggregate;
