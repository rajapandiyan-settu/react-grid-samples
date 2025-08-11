import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridPaging() {
    const gridRef = useRef<GridRef>(null);
    const [allowPaging, setAllowPaging] = useState(true);
    const [pageSettings, setPageSettings] = useState({});
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
            <div className="container">
                <aside className="sidebar">
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Paging' onChange={() => { setAllowPaging(!allowPaging); }} />
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Go to page:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter page"
                                width={110}
                                defaultValue={1}
                                min={1}
                                onChange={(args) => { gridRef.current?.goToPage?.(args?.value as number) }}

                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Page Size:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter page size"
                                width={110}
                                defaultValue={12}
                                min={10}
                                onChange={(args) => { setPageSettings({ ...gridRef.current?.pageSettings, pageSize: (args?.value as number) }) }}

                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Page Count:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter page count"
                                width={110}
                                defaultValue={8}
                                min={3}
                                onChange={(args) => { setPageSettings({ ...gridRef.current?.pageSettings, pageCount: (args?.value as number) }) }}

                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Current Page:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter current page"
                                width={110}
                                defaultValue={1}
                                min={1}
                                onChange={(args) => { setPageSettings({ ...gridRef.current?.pageSettings, currentPage: (args?.value as number) }) }}

                            />
                        </span>
                    </div>
                    {/* <div className='sidebar-items'>
                        <button onClick={()=>{ gridRef.current?.getPager()}}>Get Pager</button>
                    </div> */}
                </aside>
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        allowSorting={true}
                        allowPaging={allowPaging}
                        pageSettings={pageSettings}
                        allowFiltering={true}
                        allowSearching={true}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
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
                            <Column field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' />
                            {/* <Column field='Verified' headerText='Verified' width='100' /> */}
                            <Column field='ShipCountry' headerText='Ship Country' width='140' />
                            <Column field='ShipCity' headerText='Ship City' width='120' />
                            <Column field='ShipAddress' headerText='Ship Address' width='160' />
                            <Column field='ShipName' headerText='Ship Name' width='140' />
                        </Columns>
                        <Aggregates>
                            <AggregateRow>
                                <AggregateColumn field='Freight' type='Max' footerTemplate={footerMax} format={{ format: 'C2' }} />
                            </AggregateRow>
                        </Aggregates>
                    </Grid>
                </main>
            </div>
        </>
    )
}

export default GridPaging;
