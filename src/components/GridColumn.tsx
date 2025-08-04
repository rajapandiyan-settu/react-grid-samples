import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type GridLine, type TextWrapSettingsModel, type ColumnModel } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridColumn() {
    const gridRef = useRef<GridRef>(null);
    const [currentColumn, setCurrentColumn] = useState<ColumnModel>({
        headerText: 'Order ID',
        allowEditing: true,
        allowFiltering: true,
        allowSorting: true,
        allowSearching: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 120,
        textAlign: 'Right',
        headerTextAlign: 'Right',
    });

    const [orderIDColumn, setOrderIDColumn] = useState<ColumnModel>({
        headerText: 'Order ID',
        allowEditing: true,
        allowFiltering: true,
        allowSorting: true,
        allowSearching: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 120,
        textAlign: 'Right',
        headerTextAlign: 'Right',

    });
    const [customerIDColumn, setCustomerIDColumn] = useState<ColumnModel>({
        headerText: 'Customer ID',
        allowEditing: true,
        allowFiltering: true,
        allowSorting: true,
        allowSearching: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 140,
        textAlign: 'Left',
        headerTextAlign: 'Left',

    });
    const [freightColumn, setFreightColumn] = useState<ColumnModel>({
        headerText: 'Freight',
        allowEditing: true,
        allowFiltering: true,
        allowSorting: true,
        allowSearching: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 130,
        textAlign: 'Right',
        headerTextAlign: 'Right',

    });
    const [orderDateColumn, setOrderDateColumn] = useState<ColumnModel>({
        headerText: 'Order Date',
        allowEditing: true,
        allowFiltering: true,
        allowSorting: true,
        allowSearching: true,
        disableHtmlEncode: true,
        displayAsCheckBox: false,
        visible: true,
        width: 140,
        textAlign: 'Right',
        headerTextAlign: 'Right',

    });
    const [shipCountryColumn, setShipCountryColumn] = useState<ColumnModel>({
        headerText: 'Ship Country',
        allowEditing: true,
        allowFiltering: true,
        allowSorting: true,
        allowSearching: true,
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

    const updateColumns = (column: ColumnModel) => {
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
                                {['Order ID', 'Customer ID', 'Freight', 'Order Date', 'ShipCountry'].map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowFiltering} label='Allow Filtering' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowFiltering: !currentColumn.allowFiltering });
                            updateColumns({ ...currentColumn, allowFiltering: !currentColumn.allowFiltering });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.visible} label='Visible' onChange={() => {
                            setCurrentColumn({ ...currentColumn, visible: !currentColumn.visible });
                            updateColumns({ ...currentColumn, visible: !currentColumn.visible });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowSorting} label='Allow Sorting' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowSorting: !currentColumn.allowSorting });
                            updateColumns({ ...currentColumn, allowSorting: !currentColumn.allowSorting });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowSearching} label='Allow Searching' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowSearching: !currentColumn.allowSearching });
                            updateColumns({ ...currentColumn, allowSearching: !currentColumn.allowSearching });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.disableHtmlEncode} label='Html Encode' onChange={() => {
                            setCurrentColumn({ ...currentColumn, disableHtmlEncode: !currentColumn.disableHtmlEncode });
                            updateColumns({ ...currentColumn, disableHtmlEncode: !currentColumn.disableHtmlEncode });
                        }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={currentColumn.allowEditing} label='Allow Editing' onChange={() => {
                            setCurrentColumn({ ...currentColumn, allowEditing: !currentColumn.allowEditing });
                            updateColumns({ ...currentColumn, allowEditing: !currentColumn.allowEditing });
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
                        allowPaging={true}
                        allowFiltering={true}
                        allowSorting={true}
                        allowSelection={true}
                        height={300}
                        width={'970'}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
                        onLoad={load}
                        onCreated={created}
                        // onHeaderCellInfo={headerCellInfo}
                        // onRowDataBound={rowDataBound}
                        // onQueryCellInfo={queryCellInfo}
                        onBeforeDataBound={beforeDataBound}
                        onDataBound={dataBound}
                        onPageChanging={pageChanging}
                        onActionBegin={actionBegin}
                        onPageChanged={pageChanged}
                        onActionComplete={actionComplete}
                    >
                        <Columns>
                            <Column field='OrderID' headerText='Order ID' isPrimaryKey={true} validationRules={{ required: true }} 
                            allowEditing={orderIDColumn.allowEditing}
                            allowFiltering={orderIDColumn.allowFiltering}
                            allowSorting={orderIDColumn.allowSorting}
                            allowSearching={orderIDColumn.allowSearching}
                            visible={orderIDColumn.visible}
                            disableHtmlEncode={orderIDColumn.disableHtmlEncode}
                            displayAsCheckBox={orderIDColumn.displayAsCheckBox}
                            width={orderIDColumn.width}
                            textAlign={orderIDColumn.textAlign}
                            headerTextAlign={orderIDColumn.headerTextAlign}
                            
                            />
                            <Column field='CustomerID' headerText='Customer ID' validationRules={{ required: true }}
                            allowEditing={customerIDColumn.allowEditing}
                            allowFiltering={customerIDColumn.allowFiltering}
                            allowSorting={customerIDColumn.allowSorting}
                            allowSearching={customerIDColumn.allowSearching}
                            visible={customerIDColumn.visible}
                            disableHtmlEncode={customerIDColumn.disableHtmlEncode}
                            displayAsCheckBox={customerIDColumn.displayAsCheckBox}
                            width={customerIDColumn.width}
                            textAlign={customerIDColumn.textAlign}
                            headerTextAlign={customerIDColumn.headerTextAlign}
                             />
                            <Column field='Freight' headerText='Freight' format='C2' 
                            allowEditing={freightColumn.allowEditing}
                            allowFiltering={freightColumn.allowFiltering}
                            allowSorting={freightColumn.allowSorting}
                            allowSearching={freightColumn.allowSearching}
                            visible={freightColumn.visible}
                            disableHtmlEncode={freightColumn.disableHtmlEncode}
                            displayAsCheckBox={freightColumn.displayAsCheckBox}
                            width={freightColumn.width}
                            textAlign={freightColumn.textAlign}
                            headerTextAlign={freightColumn.headerTextAlign}
                             />
                            <Column field='OrderDate' headerText='Order Date' format='yMd' 
                            allowEditing={orderDateColumn.allowEditing}
                            allowFiltering={orderDateColumn.allowFiltering}
                            allowSorting={orderDateColumn.allowSorting}
                            allowSearching={orderDateColumn.allowSearching}
                            visible={orderDateColumn.visible}
                            disableHtmlEncode={orderDateColumn.disableHtmlEncode}
                            displayAsCheckBox={orderDateColumn.displayAsCheckBox}
                            width={orderDateColumn.width}
                            textAlign={orderDateColumn.textAlign}
                            headerTextAlign={orderDateColumn.headerTextAlign}
                             />
                            {/* <Column field='Verified' headerText='Verified' width='100' /> */}
                            <Column field='ShipCountry' headerText='Ship Country' 
                            allowEditing={shipCountryColumn.allowEditing}
                            allowFiltering={shipCountryColumn.allowFiltering}
                            allowSorting={shipCountryColumn.allowSorting}
                            allowSearching={shipCountryColumn.allowSearching}
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
