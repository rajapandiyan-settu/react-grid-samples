import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { orderData, studentData } from '../dataSource';

function GridAggregate() {

  const footerSum = (props: any) => {
    return (<span>Sum: {props.Sum}</span>);
  };

  const footerAverage = (props: any) => {
    return (<span>Average: {props.Average}</span>);
  };

  const footerMax = (props: any) => {
    return (<span>Max: {props.Max}</span>)
  }

  const footerMin = (props: any) => {
    return (<span>Min: {props.Min}</span>)
  }

  const customAggregateFn = (datas: any) => {
    const topStudent = datas.result.reduce((max: any, current: any) =>
      current.Average > max.Average ? current : max
    );

    return "Top Student RollNo: " + topStudent.RollNo;
  }

  return (
    <>
      <div className="" style={{ padding: '20px 0 0 0' }}>
        <Grid dataSource={studentData} filterSettings={{ enabled: true }} sortSettings={{ enabled: true }} pageSettings={{ enabled: true, pageSize: 8 }} >
          <Columns>
            <Column field="RollNo" headerText="Roll No" width="130" textAlign='Right' />
            <Column field="Mark1" headerText="Mark 1" width="130" textAlign="Right" />
            <Column field="Mark2" headerText="Mark 2" width="120" textAlign="Right" />
            <Column field="Mark3" headerText="Mark 3" width="130" textAlign="Right" />
            <Column field="Average" headerText="Average" width="120" textAlign="Right" />
            <Column field="Fees" headerText="Fees" width="120" textAlign="Right" />
          </Columns>
          <Aggregates>
            <AggregateRow>
              <AggregateColumn field='RollNo' type='Custom' customAggregate={customAggregateFn} />
              <AggregateColumn field='Mark1' type='Max' footerTemplate={footerMax} format='N0' />
              <AggregateColumn field='Mark2' type='Max' footerTemplate={footerMax} format='N0' />
              <AggregateColumn field='Mark3' type='Max' footerTemplate={footerMax} format='N0' />
              <AggregateColumn field='Average' type='Average' footerTemplate={footerAverage} format='N0' />
              <AggregateColumn field='Fees' type='Sum' footerTemplate={footerSum} format='N0' />
            </AggregateRow>
            <AggregateRow>
              <AggregateColumn field='Mark1' type='Min' footerTemplate={footerMin} format='N0' />
              <AggregateColumn field='Mark2' type='Min' footerTemplate={footerMin} format='N0' />
              <AggregateColumn field='Mark3' type='Min' footerTemplate={footerMin} format='N0' />
            </AggregateRow>
          </Aggregates>
        </Grid>
      </div>
    </>
  )
}

export default GridAggregate;
