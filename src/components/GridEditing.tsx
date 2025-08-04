import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type EditSettings } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridEditing() {
    const gridRef = useRef<GridRef>(null);
    const [editSettings, setEditSettings] = useState<EditSettings>({ allowEditing: true, allowAdding: true, allowDeleting: true });
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
    const beginEdit = (args: any) => {
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
                        <Checkbox defaultChecked={true} label='Allow Editing' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowEditing: !gridRef.current?.editSettings?.allowEditing }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Adding' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowAdding: !gridRef.current?.editSettings?.allowAdding }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Deleting' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowDeleting: !gridRef.current?.editSettings?.allowDeleting }); }} />
                    </div>
                </aside>
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        allowSorting={true}
                        allowPaging={true}
                        allowFiltering={true}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={editSettings}
                        onLoad={load}
                        onCreated={created}
                        // onHeaderCellInfo={headerCellInfo}
                        // onRowDataBound={rowDataBound}
                        // onQueryCellInfo={queryCellInfo}
                        onBeforeDataBound={beforeDataBound}
                        onDataBound={dataBound}
                        onBeginEdit={beginEdit}
                        onActionBegin={actionBegin}
                        onActionComplete={actionComplete}
                        height={300}
                        // width={1000}
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

export default GridEditing;
