import { useRef, useState } from 'react'
import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { Button } from "@syncfusion/react-buttons";

function dataSource(virtualData: Object[]): Object[] {
  let names: string[] = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
    'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
    'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
    'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
    'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
    'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
    'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
  const sport: string[] = ['Cricket', 'Football', 'Tennis', 'Golf', 'Chess', 'Dodgeball', 'Racket', 'Archery', 'Climbing', 'Hunting', 'Carrom', 'Tag', 'Novuss',
    'Subbuteo', 'Baseball', 'Madden NFL', 'Shuffleboard', 'Badminton', 'Hockey', 'Volleyball', 'Table Tennis', 'Golf', 'Cycling', 'Running', 'Walking', 'Wireball',
    'Town ball', 'Tee ball', 'Stool ball', 'Stick ball'];
  const country: string[] = ['India', 'Australia', 'Ballesteros', 'Belgium', 'Brazil', 'England', 'Ethiopia', 'Finland', 'France', 'Germany', 'Britain',
    'Argentina', 'Jamaica', 'Kenya', 'Morocco', 'Ireland', 'Norway', 'Philippines', 'Portugal', 'Romania', 'Russia', 'Scotland', 'Scottish', 'Serbia', 'Spain',
    'Sweden', 'Switzerland', 'Netherlands', 'UK', 'Ukraine', 'US', 'Wales', 'West Indies', 'China', 'Hong Kong', 'Italy', 'Philippines', 'Turkey', 'Botswana',
    'Sri Lanka', 'Algeria', 'Bangladesh', 'Egypt', 'Malaysia'];
  for (let i: number = 0; i < 1000000; i++) {
    virtualData.push({
      'SNo': i + 1,
      'FIELD1': names[Math.floor(Math.random() * names.length)],
      'FIELD2': 1967 + (i % 10),
      'FIELD3': sport[Math.floor(Math.random() * sport.length)],
      'FIELD4': country[Math.floor(Math.random() * country.length)],
      'FIELD5': Math.floor(Math.random() * 2000),
      'FIELD6': Math.floor(Math.random() * 1000),
      'FIELD7': Math.floor(Math.random() * 100),
      'FIELD8': Math.floor(Math.random() * 10),
      'FIELD9': Math.floor(Math.random() * 10),
      'FIELD10': Math.floor(Math.random() * 100),
      'FIELD11': Math.floor(Math.random() * 100),
      'FIELD12': Math.floor(Math.random() * 1000),
      'FIELD13': Math.floor(Math.random() * 10),
      'FIELD14': Math.floor(Math.random() * 10),
      'FIELD15': Math.floor(Math.random() * 1000),
      'FIELD16': Math.floor(Math.random() * 200),
      'FIELD17': Math.floor(Math.random() * 300),
      'FIELD18': Math.floor(Math.random() * 400),
      'FIELD19': Math.floor(Math.random() * 500),
      'FIELD20': Math.floor(Math.random() * 700),
      'FIELD21': Math.floor(Math.random() * 800),
      'FIELD22': Math.floor(Math.random() * 1000),
      'FIELD23': Math.floor(Math.random() * 2000),
      'FIELD24': Math.floor(Math.random() * 150),
      'FIELD25': Math.floor(Math.random() * 1000),
      'FIELD26': Math.floor(Math.random() * 100),
      'FIELD27': Math.floor(Math.random() * 400),
      'FIELD28': Math.floor(Math.random() * 600),
      'FIELD29': Math.floor(Math.random() * 500),
      'FIELD30': Math.floor(Math.random() * 300),
    });
  }
  return virtualData;
}

let gridData: Object[] = dataSource([]);

function Grid1MRecords() {
  const paseSettings: Object = { pageSize: 1000 };
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
              allowSorting={true}
              allowPaging={true}
              allowFiltering={true}
              pageSettings={paseSettings}
              toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
              editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
              height={270}
              onLoad={load}
              onDataBound={dataBound}
              onActionBegin={actionBegin}
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
