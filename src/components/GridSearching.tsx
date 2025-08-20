import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type SearchSettings } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { TextBox } from "@syncfusion/react-inputs";
import { Button } from "@syncfusion/react-buttons";

function GridSearching() {
    const gridRef = useRef<GridRef>(null);
    const [searchSettings, setSearchSettings] = useState<SearchSettings>({ enabled: true, fields: [], ignoreCase: true, ignoreAccent: true, operator: 'contains', value: '' });

    const operators = ['contains', 'startswith', 'endswith', 'equal', 'notcontains', 'notstartswith', 'notendswith', 'notequal'];
    const fields = ['OrderID', 'CustomerID', 'Freight', 'OrderDate', 'Verified', 'ShipCountry', 'ShipCity', 'ShipAddress', 'ShipName'];

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

    const footerMax = (props: any) => {
        return (<span>Max: {props.Max}</span>);
    };
    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Search' onChange={(args) => { setSearchSettings({ ...gridRef.current?.searchSettings, enabled: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Ignore Case' onChange={(args) => { setSearchSettings({ ...gridRef.current?.searchSettings, ignoreCase: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={searchSettings.ignoreAccent} label='Ignore Accent' onChange={(args) => { setSearchSettings({ ...gridRef.current?.searchSettings, ignoreAccent: args.value }); }} />
                    </div>

                    <div className='sidebar-items'>
                        <span className="label">Operator: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="searchoperator"
                                value={searchSettings.operator}
                                onChange={(args: any) => {
                                    setSearchSettings({ ...gridRef.current?.searchSettings, operator: args.target.value });
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
                    <div className='sidebar-items'>
                        <span className="label">Fields: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="searchfields"
                                multiple
                                value={searchSettings.fields}
                                onChange={(args: any) => {
                                    const selectedOptions = Array.from(args.target.selectedOptions).map(option => (option as any).value);
                                    setSearchSettings({ ...searchSettings, fields: selectedOptions });
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
                    <div className='sidebar-items'>
                        <span className="label">Search: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <TextBox value={searchSettings.value} width={120} onInput={(args: any) => {
                                setSearchSettings({ ...gridRef.current?.searchSettings, value: args.target.value });
                            }} />
                        </span>
                    </div>

                    <div className='sidebar-items'>
                        <Button onClick={() => { setSearchSettings({ ...gridRef.current?.searchSettings, value: '' }) }}>Clear Search</Button>
                    </div>
                </aside >
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        sortSettings={{ enabled: true }}
                        pageSettings={{ enabled: true }}
                        filterSettings={{ enabled: true }}
                        searchSettings={searchSettings}
                        toolbar={['Search']}
                        editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
                        onLoad={load}
                        onGridInit={created}
                        onDataLoadStart={beforeDataBound}
                        onDataLoaded={dataBound}
                        onSearchStart={searching}
                        onSearchComplete={searched}
                        height={300}
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

export default GridSearching;
