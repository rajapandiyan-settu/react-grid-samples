import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type EditSettings } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Button, Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridEditing() {
    const gridRef = useRef<GridRef>(null);
    const [rowIndex, setrowIndex] = useState(0);
    const [editSettings, setEditSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
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
                        <Checkbox defaultChecked={true} label='Allow Editing' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowEdit: !gridRef.current?.editSettings?.allowEdit }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Adding' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowAdd: !gridRef.current?.editSettings?.allowAdd }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Deleting' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowDelete: !gridRef.current?.editSettings?.allowDelete }); }} />
                    </div>
                    <div>
                        <span className="label">Enter the row index to select: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter the index"
                                width={150}
                                defaultValue={0}
                                min={0}
                                max={11}
                                onChange={(args) => { setrowIndex(args?.value as number) }}
                            />
                        </span>
                    </div>
                    <div style={{ padding: '10px 0 0 0' }}>
                        <Button onClick={() => { gridRef.current?.selectRow?.(rowIndex) }}>Select Row</Button>
                    </div>
                    <div style={{ padding: '10px 0 0 0' }}>
                        <Button onClick={() => { gridRef.current?.addRecord() }}>Add Record</Button>
                    </div>
                    <div style={{ padding: '10px 0 0 0' }}>
                        <Button onClick={() => { gridRef.current?.startEdit() }}>Start Edit</Button>
                    </div>
                    <div style={{ padding: '10px 0 0 0' }}>
                        <Button onClick={() => { gridRef.current?.endEdit() }}>End Edit</Button>
                    </div>
                    <div style={{ padding: '10px 0 0 0' }}>
                        <Button onClick={() => { gridRef.current?.closeEdit() }}>Cancel Edit</Button>
                    </div>
                    <div style={{ padding: '10px 0 0 0' }}>
                        <Button onClick={() => { gridRef.current?.deleteRecord() }}>Delete Record</Button>
                    </div>

                </aside>
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        sortSettings={{ enabled: true }}
                        pageSettings={{ enabled: true }}
                        filterSettings={{ enabled: true }}
                        searchSettings={{ enabled: true }}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={editSettings}
                        onLoad={load}
                        onGridInit={created}
                        onDataLoadStart={beforeDataBound}
                        onDataLoaded={dataBound}
                        height={300}
                    // width={1000}
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
                </main>
            </div>
        </>
    )
}

export default GridEditing;
