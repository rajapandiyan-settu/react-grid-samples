import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type SortSettingsModel, type SortDirection } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';
import { Button } from "@syncfusion/react-buttons";

function GridSorting() {
    const gridRef = useRef<GridRef>(null);
    const [allowSorting, setAllowSorting] = useState(true);
    const [allowMultiSorting, setAllowMultiSorting] = useState(true);
    const [sortSettings, setSortSettings] = useState<SortSettingsModel>({ allowUnsort: true, columns: [{ field: 'ShipCountry', direction: 'Ascending' }] });
    const [sortColumns, setSortColumns] = useState({
        selectedField: 'ShipCountry',
        selectedDirection: 'Ascending',
    });
    const [removeColumnSort, setRemoveColumnSort] = useState('ShipCountry');

    const fields = ['OrderID', 'CustomerID', 'Freight', 'OrderDate', 'Verified', 'ShipCountry', 'ShipCity', 'ShipAddress', 'ShipName'];
    const directions = ['Ascending', 'Descending'];
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
    const sorting = (args: any) => {
        console.log('sorting', args);
    }
    const actionBegin = (args: any) => {
        console.log('actionBegin', args);
    }
    const sorted = (args: any) => {
        console.log('sorted', args);
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
                        <Checkbox defaultChecked={true} label='Allow Sorting' onChange={() => { setAllowSorting(!allowSorting); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow MultiSorting' onChange={() => { setAllowMultiSorting(!allowMultiSorting); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={sortSettings.allowUnsort} label='Allow Unsort' onChange={() => { setSortSettings({ ...gridRef.current?.sortSettings, allowUnsort: !gridRef.current?.sortSettings?.allowUnsort }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Button onClick={() => { gridRef.current?.clearSorting?.() }}>Clear sorting</Button>
                    </div>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <div>
                            <span className="label">Field: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <select
                                    className="label"
                                    id="fieldSelect"
                                    value={sortColumns.selectedField}
                                    onChange={(args: any) => {
                                        setSortColumns({ ...sortColumns, selectedField: args.target.value });
                                    }}
                                >
                                    {fields.map((field) => (
                                        <option key={field} value={field}>
                                            {field}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </div>
                        <div style={{ padding: '10px 0 0 0' }}>
                            <span className="label">Direction: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <select
                                    className="label"
                                    id="directionSelect"
                                    value={sortColumns.selectedDirection}
                                    onChange={(args: any) => {
                                        setSortColumns({ ...sortColumns, selectedDirection: args.target.value });
                                    }}
                                >
                                    {directions.map((direction) => (
                                        <option key={direction} value={direction}>
                                            {direction}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </div>
                        <div style={{ padding: '10px 0 0 0' }}>
                            <Button onClick={() => { gridRef.current?.sortColumn?.(sortColumns.selectedField, sortColumns.selectedDirection as SortDirection) }}>Sort Columns</Button>
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <div>
                            <span className="label">Field: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <select
                                    className="label"
                                    id="removeColumnSort"
                                    value="ShipCountry"
                                    onChange={(args: any) => {
                                        setRemoveColumnSort(args.target.value);
                                    }}
                                >
                                    {fields.map((field) => (
                                        <option key={field} value={field}>
                                            {field}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </div>

                        <div style={{ padding: '10px 0 0 0' }}>
                            <Button onClick={() => { gridRef.current?.removeSortColumn?.(removeColumnSort) }}>Remove Sort Column</Button>
                        </div>
                    </div>
                </aside >
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        allowSorting={allowSorting}
                        allowMultiSorting={allowMultiSorting}
                        sortSettings={sortSettings}
                        allowPaging={true}
                        allowFiltering={true}
                        allowSearching={true}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
                        onLoad={load}
                        onGridInit={created}
                        onDataLoadStart={beforeDataBound}
                        onDataLoaded={dataBound}
                        onSortStart={sorting}
                        onSortComplete={sorted}
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
                </main>
            </div >
        </>
    )
}

export default GridSorting;
