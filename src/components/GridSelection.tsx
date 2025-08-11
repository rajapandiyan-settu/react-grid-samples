import { useRef, useState, useMemo } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type SearchSettingsModel, type SelectionSettingsModel } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { TextBox } from "@syncfusion/react-inputs";
import { Button } from "@syncfusion/react-buttons";
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridSelection() {
    const gridRef = useRef<GridRef>(null);
    const [allowSelection, setAllowSelection] = useState(true);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(4);
    const [clearIndexes, setClearIndexes] = useState<number[]>([]);
    const [selectionSettings, setSelectionSettings] = useState<SelectionSettingsModel>({ type: 'Single' });

    const operators = ['contains', 'startswith', 'endswith', 'equal', 'notcontains', 'notstartswith', 'notendswith', 'notequal'];
    const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
    const searching = (args: any) => {
        console.log('searching', args);
    }
    const actionBegin = (args: any) => {
        console.log('actionBegin', args);
    }
    const searched = (args: any) => {
        console.log('searched', args);
    }
    const actionComplete = (args: any) => {
        console.log('actionComplete', args);
    }
    const rowSelecting = (args: any) => {
        console.log('rowSelecting', args);
    }
    const rowSelected = (args: any) => {
        console.log('rowSelected', args);
    }
    const rowDeselecting = (args: any) => {
        console.log('rowDeselecting', args);
    }
    const rowDeselected = (args: any) => {
        console.log('rowDeselected', args);
    }

    const footerMax = (props: any) => {
        return (<span>Max: {props.Max}</span>);
    };

    const gridComp = useMemo(()=> {
        return (
<Grid
                        ref={gridRef}
                        dataSource={orderData}
                        allowSorting={true}
                        allowPaging={true}
                        allowFiltering={true}
                        allowSearching={true}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
                        allowSelection={allowSelection}
                        selectionSettings={selectionSettings}
                        onLoad={load}
                        onGridInit={created}
                        onDataLoadStart={beforeDataBound}
                        onDataLoaded={dataBound}
                        onSearchStart={searching}
                        onSearchComplete={searched}
                        onRowSelecting={rowSelecting}
                        onRowSelected={rowSelected}
                        onRowDeselecting={rowDeselecting}
                        onRowDeselected={rowDeselected}
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
        );
    }, [allowSelection, selectionSettings])
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Selection' onChange={(args) => { setAllowSelection(args.value) }} />
                    </div>

                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Multiple Selection' onChange={(args) => { setSelectionSettings({ ...gridRef.current?.selectionSettings, type: args.value ? 'Multiple' : 'Single' }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Button onClick={() => { console.log(gridRef.current?.getSelectedRecords?.()) }}>Get Selected Records</Button>
                    </div>
                    <div className='sidebar-items'>
                        <Button onClick={() => { console.log(gridRef.current?.getSelectedRows?.()) }}>Get Selected Rows</Button>
                    </div>
                    <div className='sidebar-items'>
                        <Button onClick={() => { console.log(gridRef.current?.getSelectedRowIndexes?.()) }}>Get Selected Indexes</Button>
                    </div>
                    <div className='sidebar-items'>
                        <Button onClick={() => {
                            gridRef.current?.clearSelection();
                        }}
                        >Clear Selection</Button>
                    </div>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <div className="label">Range Select: </div>
                        <div>
                            <span className="label">Start: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <NumericTextBox
                                    placeholder="Enter page size"
                                    width={150}
                                    defaultValue={1}
                                    min={0}
                                    max={11}
                                    onChange={(args) => { setStart(args?.value as number) }}

                                />
                            </span>
                        </div>
                        <div>
                            <span className="label">End: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <NumericTextBox
                                    placeholder="Enter page size"
                                    width={150}
                                    defaultValue={4}
                                    min={0}
                                    max={11}
                                    onChange={(args) => { setEnd(args?.value as number) }}

                                />
                            </span>
                        </div>
                        <div style={{ padding: '10px 0 0 0' }}>
                            <Button onClick={() => { gridRef.current?.selectRowByRange?.(start, end); }}>Range Select</Button>
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <span className="label">Select Indexes: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="searchfields"
                                multiple
                                onChange={(args: any) => {
                                    const selectedOptions = Array.from(args.target.selectedOptions).map(option => parseInt((option as any).value));
                                    setClearIndexes(selectedOptions);
                                }}
                            >
                                {indexes.map((index) => (
                                    <option key={index} value={index}>
                                        {index}
                                    </option>
                                ))}
                            </select>
                            <div style={{ padding: '10px 0 0 0' }}>
                                <Button onClick={() => {
                                    debugger;
                                     gridRef.current?.clearRowSelection?.(clearIndexes)
                                }}>Clear Specific Selection</Button>
                            </div>
                        </span>
                    </div>
                </aside >
                <main className="sub-content">
                    {gridComp}
                </main>
            </div >
        </>
    )
}

export default GridSelection;
