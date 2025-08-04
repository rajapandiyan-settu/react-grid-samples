import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type SortSettingsModel, type SortDirection, type FilterSettingsModel } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';
import { TextBox } from "@syncfusion/react-inputs";
import { Button } from "@syncfusion/react-buttons";

function GridFiltering() {
    const gridRef = useRef<GridRef>(null);
    const [allowFiltering, setAllowFiltering] = useState(true);
    const [filterSettings, setFilterSettings] = useState<FilterSettingsModel>({
        enableCaseSensitivity: false,
        ignoreAccent: true,
        mode: 'OnEnter',
        immediateModeDelay: 1500,
        columns: [{ field: 'ShipCountry', matchCase: false, operator: 'startswith', predicate: 'and', value: 'france' }]
    });
    const [filterColumn, setFilterColumn] = useState({
        field: 'ShipCountry',
        operator: 'startswith',
        value: ''
    });
    const [removeColumnFilter, setRemoveColumnFilter] = useState('ShipCountry');
    const operators = ['contains', 'startswith', 'endswith', 'equal', 'notcontains', 'notstartswith', 'notendswith', 'notequal'];
    const fields = ['OrderID', 'CustomerID', 'Freight', 'OrderDate', 'Verified', 'ShipCountry', 'ShipCity', 'ShipAddress', 'ShipName'];
    const mode = ['OnEnter', 'Immediate'];

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
    const filtering = (args: any) => {
        console.log('filtering', args);
    }
    const actionBegin = (args: any) => {
        console.log('actionBegin', args);
    }
    const filtered = (args: any) => {
        console.log('filtered', args);
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
                        <Checkbox defaultChecked={allowFiltering} label='Allow Filtering' onChange={() => { setAllowFiltering(!allowFiltering); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Enable Case Sensitivity' onChange={(args) => { setFilterSettings({ ...gridRef.current?.filterSettings, enableCaseSensitivity: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Ignore Accent' onChange={(args) => { setFilterSettings({ ...gridRef.current?.filterSettings, ignoreAccent: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <span className="label">Mode: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="fieldSelect"
                                value={filterSettings.mode}
                                onChange={(args: any) => {
                                    setFilterSettings({ ...gridRef.current?.filterSettings, mode: args.target.value });
                                }}
                            >
                                {mode.map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Delay:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter delay"
                                width={120}
                                defaultValue={1500}
                                min={100}
                                onChange={(args) => { setFilterSettings({ ...gridRef.current?.filterSettings, immediateModeDelay: (args?.value as number) }) }}

                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <Button onClick={() => { gridRef.current?.clearFiltering?.() }}>Clear Filtering</Button>
                    </div>

                    <div className='sidebar-items'>
                        <Button onClick={() => {
                            // gridRef.current?.getData?.()
                        }}>Get Filtered Records</Button>
                    </div>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <div>
                            <span className="label">Field: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <select
                                    className="label"
                                    id="fieldSelect"
                                    value={filterColumn.field}
                                    onChange={(args: any) => {
                                        setFilterColumn({ ...filterColumn, field: args.target.value });
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
                            <span className="label">Operator: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <select
                                    className="label"
                                    id="directionSelect"
                                    value={filterColumn.operator}
                                    onChange={(args: any) => {
                                        setFilterColumn({ ...filterColumn, operator: args.target.value });
                                    }}
                                >
                                    {operators.map((operator) => (
                                        <option key={operator} value={operator}>
                                            {operator}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </div>

                        <div style={{ padding: '10px 0 0 0' }}>
                            <span className="label">Value: </span>
                            <span style={{ padding: '0 0 0 10px' }}>
                                <TextBox value={filterColumn.value} width={150} onInput={(args: any) => {
                                    setFilterColumn({ ...filterColumn, value: args.target.value });
                                }} />
                            </span>
                        </div>
                        <div style={{ padding: '10px 0 0 0' }}>
                            <Button onClick={() => { gridRef.current?.filterByColumn?.(filterColumn.field, filterColumn.operator, filterColumn.value) }}>Filter By Column</Button>
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
                                        setRemoveColumnFilter(args.target.value);
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
                            <Button onClick={() => { gridRef.current?.removeFilteredColsByField?.(removeColumnFilter) }}>Remove Filter By Column</Button>
                        </div>
                    </div>
                </aside >
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        allowSorting={true}
                        allowPaging={true}
                        allowFiltering={allowFiltering}
                        filterSettings={filterSettings}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
                        onLoad={load}
                        onCreated={created}
                        // onHeaderCellInfo={headerCellInfo}
                        // onRowDataBound={rowDataBound}
                        // onQueryCellInfo={queryCellInfo}
                        onBeforeDataBound={beforeDataBound}
                        onDataBound={dataBound}
                        onFiltering={filtering}
                        onActionBegin={actionBegin}
                        onFiltered={filtered}
                        onActionComplete={actionComplete}
                        height={300}
                        // width={900}
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
            </div >
        </>
    )
}

export default GridFiltering;
