import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type ColumnProps } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridColumn() {
    const gridRef = useRef<GridRef>(null);
    const [currentColumn, setCurrentColumn] = useState<ColumnProps>({
        headerText: 'Order ID',
        allowEdit: true,
        allowFilter: true,
        allowSort: true,
        allowSearch: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 120,
        textAlign: 'Right',
        headerTextAlign: 'Right',
    });

    const [orderIDColumn, setOrderIDColumn] = useState<ColumnProps>({
        headerText: 'Order ID',
        allowEdit: true,
        allowFilter: true,
        allowSort: true,
        allowSearch: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 120,
        textAlign: 'Right',
        headerTextAlign: 'Right',

    });
    const [customerIDColumn, setCustomerIDColumn] = useState<ColumnProps>({
        headerText: 'Customer ID',
        allowEdit: true,
        allowFilter: true,
        allowSort: true,
        allowSearch: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 140,
        textAlign: 'Left',
        headerTextAlign: 'Left',

    });
    const [freightColumn, setFreightColumn] = useState<ColumnProps>({
        headerText: 'Freight',
        allowEdit: true,
        allowFilter: true,
        allowSort: true,
        allowSearch: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 130,
        textAlign: 'Right',
        headerTextAlign: 'Right',

    });
    const [orderDateColumn, setOrderDateColumn] = useState<ColumnProps>({
        headerText: 'Order Date',
        allowEdit: true,
        allowFilter: true,
        allowSort: true,
        allowSearch: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 140,
        textAlign: 'Right',
        headerTextAlign: 'Right',

    });
    const [shipCountryColumn, setShipCountryColumn] = useState<ColumnProps>({
        headerText: 'Ship Country',
        allowEdit: true,
        allowFilter: true,
        allowSort: true,
        allowSearch: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 160,
        textAlign: 'Left',
        headerTextAlign: 'Left',
    });
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

    const updateColumns = (column: ColumnProps) => {
        switch (column.headerText) {
            case 'Order ID':
                setOrderIDColumn(column);
                break;
            case 'Customer ID':
                setCustomerIDColumn(column);
                break;
            case 'Freight':
                setFreightColumn(column);
                break;
            case 'Order Date':
                setOrderDateColumn(column);
                break;
            case 'Ship Country':
                setShipCountryColumn(column);
                break;
        }
    }
    return (
        <>
            <div className="container">
                <aside className="sidebar">

                    <div className='sidebar-items'>
                        <span className="label"> Column: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="columntext"
                                value={currentColumn.headerText}
                                onChange={(args: any) => {
                                    switch (args.target.value) {
                                        case 'Order ID':
                                            setCurrentColumn({ ...orderIDColumn });
                                            break;
                                        case 'Customer ID':
                                            setCurrentColumn({ ...customerIDColumn });
                                            break;
                                        case 'Freight':
                                            setCurrentColumn({ ...freightColumn });
                                            break;
                                        case 'Order Date':
                                            setCurrentColumn({ ...orderDateColumn });
                                            break;
                                        case 'Ship Country':
                                            setCurrentColumn({ ...shipCountryColumn });
                                    }
                                }}
                            >
                                {['Order ID', 'Customer ID', 'Freight', 'Order Date', 'Ship Country'].map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowFilter} label='Allow Filtering' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowFilter: !currentColumn.allowFilter });
                            updateColumns({ ...currentColumn, allowFilter: !currentColumn.allowFilter });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.visible} label='Visible' onChange={() => {
                            setCurrentColumn({ ...currentColumn, visible: !currentColumn.visible });
                            updateColumns({ ...currentColumn, visible: !currentColumn.visible });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowSort} label='Allow Sorting' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowSort: !currentColumn.allowSort });
                            updateColumns({ ...currentColumn, allowSort: !currentColumn.allowSort });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowSearch} label='Allow Searching' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowSearch: !currentColumn.allowSearch });
                            updateColumns({ ...currentColumn, allowSearch: !currentColumn.allowSearch });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.disableHtmlEncode} label='Html Encode' onChange={() => {
                            setCurrentColumn({ ...currentColumn, disableHtmlEncode: !currentColumn.disableHtmlEncode });
                            updateColumns({ ...currentColumn, disableHtmlEncode: !currentColumn.disableHtmlEncode });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowEdit} label='Allow Editing' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowEdit: !currentColumn.allowEdit });
                            updateColumns({ ...currentColumn, allowEdit: !currentColumn.allowEdit });
                        }} />
                    </div>
                    {/* <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.displayAsCheckBox} label='Disaply As Checkbox' onChange={() => {
                            setCurrentColumn({ ...currentColumn, displayAsCheckBox: !currentColumn.displayAsCheckBox });
                            updateColumns({ ...currentColumn, displayAsCheckBox: !currentColumn.displayAsCheckBox });
                        }} />
                    </div> */}
                    <div className='sidebar-items'>
                        <span className='label'>Width:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter width"
                                width={120}
                                value={currentColumn.width as number}
                                min={90}
                                onChange={(args) => {
                                    setCurrentColumn({ ...currentColumn, width: (args.value as number) });
                                    updateColumns({ ...currentColumn, width: (args.value as number) });
                                }}
                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className="label">TextAlign: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="gridlines"
                                value={currentColumn.textAlign}
                                onChange={(args: any) => {
                                    setCurrentColumn({ ...currentColumn, textAlign: args.target.value });
                                    updateColumns({ ...currentColumn, textAlign: args.target.value });
                                }}
                            >
                                {['Left', 'Right', 'Center', 'Justify'].map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className="label">Header TextAlign: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="gridlines"
                                value={currentColumn.headerTextAlign}
                                onChange={(args: any) => {
                                    setCurrentColumn({ ...currentColumn, headerTextAlign: args.target.value });
                                    updateColumns({ ...currentColumn, headerTextAlign: args.target.value });
                                }}
                            >
                                {['Left', 'Right', 'Center', 'Justify'].map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </span>
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
                        selectionSettings={{ enabled: true }}
                        height={300}
                        width={'970'}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowAdd: true, allowDelete: true, allowEdit: true }}
                        onLoad={load}
                        onGridInit={created}
                        onDataLoadStart={beforeDataBound}
                        onDataLoaded={dataBound}
                        onPageChangeStart={pageChanging}
                        onPageChangeComplete={pageChanged}
                    >
                        <Columns>
                            <Column field='OrderID' headerText='Order ID' isPrimaryKey={true} validationRules={{ required: true }} 
                            allowEdit={orderIDColumn.allowEdit}
                            allowFilter={orderIDColumn.allowFilter}
                            allowSort={orderIDColumn.allowSort}
                            allowSearch={orderIDColumn.allowSearch}
                            visible={orderIDColumn.visible}
                            disableHtmlEncode={orderIDColumn.disableHtmlEncode}
                            displayAsCheckBox={orderIDColumn.displayAsCheckBox}
                            width={orderIDColumn.width}
                            textAlign={orderIDColumn.textAlign}
                            headerTextAlign={orderIDColumn.headerTextAlign}
                            
                            />
                            <Column field='CustomerID' headerText='Customer ID' validationRules={{ required: true }}
                            allowEdit={customerIDColumn.allowEdit}
                            allowFilter={customerIDColumn.allowFilter}
                            allowSort={customerIDColumn.allowSort}
                            allowSearch={customerIDColumn.allowSearch}
                            visible={customerIDColumn.visible}
                            disableHtmlEncode={customerIDColumn.disableHtmlEncode}
                            displayAsCheckBox={customerIDColumn.displayAsCheckBox}
                            width={customerIDColumn.width}
                            textAlign={customerIDColumn.textAlign}
                            headerTextAlign={customerIDColumn.headerTextAlign}
                             />
                            <Column field='Freight' headerText='Freight' format='C2' 
                            allowEdit={freightColumn.allowEdit}
                            allowFilter={freightColumn.allowFilter}
                            allowSort={freightColumn.allowSort}
                            allowSearch={freightColumn.allowSearch}
                            visible={freightColumn.visible}
                            disableHtmlEncode={freightColumn.disableHtmlEncode}
                            displayAsCheckBox={freightColumn.displayAsCheckBox}
                            width={freightColumn.width}
                            textAlign={freightColumn.textAlign}
                            headerTextAlign={freightColumn.headerTextAlign}
                             />
                            <Column field='OrderDate' headerText='Order Date' format='yMd' 
                            allowEdit={orderDateColumn.allowEdit}
                            allowFilter={orderDateColumn.allowFilter}
                            allowSort={orderDateColumn.allowSort}
                            allowSearch={orderDateColumn.allowSearch}
                            visible={orderDateColumn.visible}
                            disableHtmlEncode={orderDateColumn.disableHtmlEncode}
                            displayAsCheckBox={orderDateColumn.displayAsCheckBox}
                            width={orderDateColumn.width}
                            textAlign={orderDateColumn.textAlign}
                            headerTextAlign={orderDateColumn.headerTextAlign}
                             />
                            {/* <Column field='Verified' headerText='Verified' width='100' /> */}
                            <Column field='ShipCountry' headerText='Ship Country' 
                            allowEdit={shipCountryColumn.allowEdit}
                            allowFilter={shipCountryColumn.allowFilter}
                            allowSort={shipCountryColumn.allowSort}
                            allowSearch={shipCountryColumn.allowSearch}
                            visible={shipCountryColumn.visible}
                            disableHtmlEncode={shipCountryColumn.disableHtmlEncode}
                            displayAsCheckBox={shipCountryColumn.displayAsCheckBox}
                            width={shipCountryColumn.width}
                            textAlign={shipCountryColumn.textAlign}
                            headerTextAlign={shipCountryColumn.headerTextAlign}
                            />
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

export default GridColumn;
