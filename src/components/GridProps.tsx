import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type GridLine, type TextWrapSettingsModel } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox } from '@syncfusion/react-inputs';

function GridProps() {
    const gridRef = useRef<GridRef>(null);
    const [allowPaging, setAllowPaging] = useState(true);
    const [allowFiltering, setAllowFiltering] = useState(true);
    const [allowSorting, setAllowSorting] = useState(true);
    const [allowSelection, setAllowSelection] = useState(true);
    const [allowTextWrap, setAllowTextWrap] = useState(false);
    const [enableHover, setEnableHover] = useState(true);
    const [height, setHeight] = useState(300);
    const [width, setWidth] = useState<number>(980);
    const [gridLines, setGridLines] = useState('Default');
    const [allowKeyboard, setAllowKeyboard] = useState(true);
    const [enableRtl, setEnableRtl] = useState(false);
    const [enableAltRow, setEnableAltRow] = useState(false);
    const [allowMultiSorting, setAllowMultiSorting] = useState(true);
    const [enableHtmlSanitizer, setEnableHtmlSanitizer] = useState(false);
    const [enableStickyHeader, setEnableStickyHeader] = useState(false);
    const [rowHeight, setRowHeight] = useState<number>();
    const [textWrapSettings, setTextWrapSettings] = useState({ wrapMode: 'Both' });
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
                        <Checkbox defaultChecked={true} label='Allow Filtering' onChange={() => { setAllowFiltering(!allowFiltering); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Sorting' onChange={() => { setAllowSorting(!allowSorting); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Multi Sorting' onChange={() => { setAllowMultiSorting(!allowMultiSorting); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Selection' onChange={() => { setAllowSelection(!allowSelection); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Enable Hover' onChange={() => { setEnableHover(!enableHover); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Enable Alt Row' onChange={() => { setEnableAltRow(!enableAltRow); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Enable RTL' onChange={() => { setEnableRtl(!enableRtl); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Keyboard' onChange={() => { setAllowKeyboard(!allowKeyboard); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Enable Sanitizer' onChange={() => { setEnableHtmlSanitizer(!enableHtmlSanitizer); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Enable Sticky Header' onChange={() => { setEnableStickyHeader(!enableStickyHeader); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Allow Textwrap' onChange={() => { setAllowTextWrap(!allowTextWrap); }} />
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Height:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter height"
                                width={130}
                                defaultValue={300}
                                min={90}
                                max={700}
                                onChange={(args) => { setHeight(args?.value as number) }}

                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Width:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter width"
                                width={130}
                                defaultValue={1000}
                                min={90}
                                onChange={(args) => { setWidth(args?.value as number) }}

                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className='label'>Row Height:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter row height"
                                width={100}
                                defaultValue={37}
                                min={20}
                                max={120}
                                onChange={(args) => { setRowHeight(args?.value as number) }}

                            />
                        </span>
                    </div>

                    <div className='sidebar-items'>
                        <span className="label">GridLines: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="gridlines"
                                value={'Default'}
                                onChange={(args: any) => {
                                    setGridLines(args.target.value);
                                }}
                            >
                                {['Default', 'Both', 'Vertical', 'Horizontal', 'None'].map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <span className="label">Wrap Settings: </span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <select
                                className="label"
                                id="wrapsettings"
                                value={'Both'}
                                onChange={(args: any) => {
                                    setTextWrapSettings({ wrapMode: args.target.value });
                                }}
                            >
                                {['Both', 'Content', 'Header'].map((m) => (
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
                        allowPaging={allowPaging}
                        allowFiltering={allowFiltering}
                        allowSorting={allowSorting}
                        allowSearching={true}
                        allowSelection={allowSelection}
                        allowTextWrap={allowTextWrap}
                        enableHover={enableHover}
                        height={height}
                        width={width}
                        gridLines={gridLines as GridLine}
                        allowKeyboard={allowKeyboard}
                        enableRtl={enableRtl}
                        enableAltRow={enableAltRow}
                        allowMultiSorting={allowMultiSorting}
                        enableHtmlSanitizer={enableHtmlSanitizer}
                        enableStickyHeader={enableStickyHeader}
                        rowHeight={rowHeight}
                        textWrapSettings={textWrapSettings as TextWrapSettingsModel}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowAdding: true, allowDeleting: true, allowEditing: true }}
                        onLoad={load}
                        onGridInit={created}
                        onDataLoadStart={beforeDataBound}
                        onDataLoaded={dataBound}
                        onPageChangeStart={pageChanging}
                        onPageChangeComplete={pageChanged}
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

export default GridProps;
