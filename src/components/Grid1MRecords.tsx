import { useRef, useState } from 'react'
import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { Button } from "@syncfusion/react-buttons";
import { dataSource } from '../dataSource';

let gridData: Object[] = dataSource([]);

function Grid1MRecords() {
  const [flag, setFlag] = useState(false);
  const stTime = useRef(0);
  const edTime = useRef(0);
  const diff = useRef(0);
  const actionBegin = (args: any) => {
    console.log('Native React Grid actionBegin triggered => ', args);
    stTime.current = performance.now();
  }
  const dataBound = () => {
    console.log('dataBound triggered! gridRef => ');
    edTime.current = performance.now();
    diff.current = parseInt((edTime.current - stTime.current).toFixed(0));
    const perfElement = document.getElementById('performanceTime');
    if (perfElement) {
      perfElement.innerHTML = `Time Taken for Initial Load: <b>${diff.current}ms</b>`;
    }
    stTime.current = 0;
    edTime.current = 0;
    diff.current = 0;
  }
  const load = () => {
    console.log('load triggered!');
    stTime.current = performance.now();
  }
  const footerMax = (props: any) => {
    return (<span>Max: {props.Max}</span>);
  };
  return (
    <>
      <div className="" style={{ padding: '20px 0 0 0' }}>
        <Button onClick={() => setFlag(true)}>Render Grid</Button>
        <Button style={{ margin: '0 0 0 20px' }} onClick={() => setFlag(false)}>Destroy Grid</Button>
        {flag && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4 style={{ margin: '10px 0 0 0' }}>Performance Metrics</h4>
              <p id="performanceTime" style={{ margin: 0 }}></p>
            </div>
            <Grid
              dataSource={gridData}
              sortSettings={{ enabled: true }}
              pageSettings={{ enabled: true, pageSize: 1000 }}
              filterSettings={{ enabled: true }}
              searchSettings={{ enabled: true }}
              toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
              editSettings={{ allowAdd: true, allowDelete: true, allowEdit: true }}
              height={270}
              onLoad={load}
              onDataLoadStart={dataBound}
              onPageChangeStart={actionBegin}
              onSortStart={actionBegin}
              onSearchStart={actionBegin}
              onFilterStart={actionBegin}
            >
              <Columns>
                <Column field='SNo' headerText='SNO' isPrimaryKey={true} validationRules={{ required: true }} width='100' />
                <Column field='FIELD1' width='100' validationRules={{ required: true }} />
                <Column field='FIELD2' width='100' />
                <Column field='FIELD3' width='100' />
                <Column field='FIELD4' width='100' />
                <Column field='FIELD5' width='100' />
                <Column field='FIELD6' width='100' />
                <Column field='FIELD7' width='100' />
                <Column field='FIELD8' width='100' />
                <Column field='FIELD9' width='100' />
                <Column field='FIELD10' width='100' />
                {/* <Column field='FIELD11' width='100'/>
            <Column field='FIELD12' width='100'/>
            <Column field='FIELD13' width='100'/>
            <Column field='FIELD14' width='100'/>
            <Column field='FIELD15' width='100'/>
            <Column field='FIELD16' width='100'/>
            <Column field='FIELD17' width='100'/>
            <Column field='FIELD18' width='100'/>
            <Column field='FIELD19' width='100'/>
            <Column field='FIELD20' width='100'/> */}
              </Columns>
              <Aggregates>
                <AggregateRow>
                  <AggregateColumn field='FIELD8' type='Max' footerTemplate={footerMax} format={{ format: 'C2' }} />
                </AggregateRow>
              </Aggregates>
            </Grid>
          </div>
        )}
      </div>
    </>
  )
}

export default Grid1MRecords;
