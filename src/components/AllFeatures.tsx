import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, type ColumnProps, type EditSettings, Column, Aggregates, AggregateColumn, AggregateRow, type GridLine, type SortDirection, type SearchSettings, type TextWrapSettings, type PageSettings, type SortSettings, type FilterSettings,  } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { NumericTextBox, TextBox } from '@syncfusion/react-inputs';
import { Button } from "@syncfusion/react-buttons";

function AllFeatures() {
    const gridRef = useRef<GridRef>(null);
    const [allowPaging, setAllowPaging] = useState(true);
    const [allowFiltering, setAllowFiltering] = useState(true);
    const [selectionSettings, setSelectionSettings] = useState({enabled: true});
    const [enableHover, setEnableHover] = useState(true);
    const [height, setHeight] = useState(300);
    const [width, setWidth] = useState<number>(980);
    const [gridLines, setGridLines] = useState('Default');
    const [allowKeyboard, setAllowKeyboard] = useState(true);
    const [enableRtl, setEnableRtl] = useState(false);
    const [enableAltRow, setEnableAltRow] = useState(false);
    const [enableHtmlSanitizer, setEnableHtmlSanitizer] = useState(false);
    const [enableStickyHeader, setEnableStickyHeader] = useState(false);
    const [rowHeight, setRowHeight] = useState<number>();
    const [textWrapSettings, setTextWrapSettings] = useState<TextWrapSettings>({ enabled: true, wrapMode: 'Both' });
    const [pageSettings, setPageSettings] = useState<PageSettings>({enabled: true});
    const [editSettings, setEditSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [searchSettings, setSearchSettings] = useState<SearchSettings>({ enabled: true, fields: [], ignoreCase: true, ignoreAccent: true, operator: 'contains' });
    const [sortSettings, setSortSettings] = useState<SortSettings>({ enabled: true, mode: 'multiple', allowUnsort: true, columns: [{ field: 'ShipCountry', direction: 'Ascending' }] });
    const [sortColumns, setSortColumns] = useState({
        selectedField: 'ShipCountry',
        selectedDirection: 'Ascending',
    });
    const [removeColumnSort, setRemoveColumnSort] = useState('ShipCountry');

    const fields = ['OrderID', 'CustomerID', 'Freight', 'OrderDate', 'ShipCountry'];
    const directions = ['Ascending', 'Descending'];


    const [filterSettings, setFilterSettings] = useState<FilterSettings>({
        enabled: true,
        caseSensitive: false,
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
    const mode = ['OnEnter', 'Immediate'];
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
    const pageChanged = (args: any) => {
        console.log('pageChanged', args);
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
                    <span className='label sidebarheader first'>Grid Props</span>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Paging' onChange={(args) => { setPageSettings({ ...gridRef.current?.pageSettings, enabled: (args.value) }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Filtering' onChange={(args) => { setFilterSettings({ ...gridRef.current?.filterSettings, enabled: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Sorting' onChange={(args) => { setSortSettings({ ...gridRef.current?.sortSettings, enabled: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Multi Sorting' onChange={(args) => { setSortSettings({ ...gridRef.current?.sortSettings, mode: args.value ? 'multiple' : 'single' }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Selection' onChange={(args) => { setSelectionSettings({...gridRef.current?.selectionSettings, enabled: args.value} ) }} />
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
                        <Checkbox defaultChecked={false} label='Allow Textwrap' onChange={(args) => { setTextWrapSettings({...gridRef.current?.textWrapSettings, enabled: args.value} ) }} />
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
                                     setTextWrapSettings({...gridRef.current?.textWrapSettings, wrapMode: args.target.value});
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
                    <br/>
                    <span className='label sidebarheader'>Column Props</span>
                    <div className='separator'></div>
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
                    <br/>
                    <span className='label sidebarheader'>Page Settings</span>
                    <div className='separator'></div>
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
                    <br/>
                    <span className='label sidebarheader'>Sort Settings</span>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Sorting' onChange={(args) => { setSortSettings({ ...gridRef.current?.sortSettings, enabled: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow MultiSorting' onChange={(args) => { setSortSettings({ ...gridRef.current?.sortSettings, mode: args.value ? 'multiple' : 'single' }); }} />
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
                                    value= {removeColumnSort}
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
                    <br/>
                    <span className='label sidebarheader'>Filter Settings</span>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Filtering' onChange={(args) => { setFilterSettings({ ...gridRef.current?.filterSettings, enabled: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={false} label='Enable Case Sensitivity' onChange={(args) => { setFilterSettings({ ...gridRef.current?.filterSettings, caseSensitive: args.value }); }} />
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
                                value={'OnEnter'}
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
                    <br/>
                    <span className='label sidebarheader'>Search Settings</span>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Ignore Case' onChange={(args) => { setSearchSettings({ ...gridRef.current?.searchSettings, ignoreCase: args.value }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Ignore Accent' onChange={(args) => { setSearchSettings({ ...gridRef.current?.searchSettings, ignoreAccent: args.value }); }} />
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
                    <br/>
                    <span className='label sidebarheader'>Edit Settings</span>
                    <div className='separator'></div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Editing' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowEdit: !gridRef.current?.editSettings?.allowEdit }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Adding' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowAdd: !gridRef.current?.editSettings?.allowAdd }); }} />
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Allow Deleting' onChange={() => { setEditSettings({ ...gridRef.current?.editSettings, allowDelete: !gridRef.current?.editSettings?.allowDelete }); }} />
                    </div>
                </aside>
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        pageSettings={pageSettings}
                        filterSettings={filterSettings}
                        searchSettings={searchSettings}
                        sortSettings={sortSettings}
                        selectionSettings={selectionSettings}
                        enableHover={enableHover}
                        height={height}
                        width={width}
                        gridLines={gridLines as GridLine}
                        allowKeyboard={allowKeyboard}
                        enableRtl={enableRtl}
                        enableAltRow={enableAltRow}
                        enableHtmlSanitizer={enableHtmlSanitizer}
                        enableStickyHeader={enableStickyHeader}
                        rowHeight={rowHeight}
                        textWrapSettings={textWrapSettings}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={editSettings}
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

export default AllFeatures;
