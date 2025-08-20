import { useRef, useState } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow } from '@syncfusion/react-grid';
import { orderData } from '../dataSource'

function GridAllEvents() {
    const gridRef = useRef<GridRef>(null);
    const appendElement = (eventargs: string) => {
        let span: HTMLElement = document.createElement('span');
        span.innerHTML = eventargs;
        let log: any = document.getElementById('EventLog');
        log?.appendChild(span);
    }
    const handleLoad = (args: any) => {
        console.log('onLoad', args);
        appendElement(`Grid <b>onLoad</b> event is triggered<hr>`);
    }
    const handleGridInit = (args: any) => {
        console.log('onGridInit', args);
        appendElement(`Grid <b>onGridInit</b> event is triggered<hr>`);
    }
    const handleDataLoadStart = (args: any) => {
        console.log('onDataLoadStart', args);
        appendElement(`Grid <b>onDataLoadStart</b> event is triggered<hr>`);
    }
    const handleDataLoaded = (args: any) => {
        console.log('onDataLoaded', args);
        appendElement(`Grid <b>onDataLoaded</b> event is triggered<hr>`);
    }
    const handleHeaderCellRender = (args: any) => {
        console.log('onHeaderCellRender', args);
        appendElement(`Grid <b>onHeaderCellRender</b> event is triggered<hr>`);
    }
    const handleAggregateCellRender = (args: any) => {
        console.log('onAggregateCellRender', args);
        appendElement(`Grid <b>onAggregateCellRender</b> event is triggered<hr>`);
    }
    const handleCellRender = (args: any) => {
        console.log('onCellRender', args);
        appendElement(`Grid <b>onCellRender</b> event is triggered<hr>`);
    }
    const handleRowRender = (args: any) => {
        console.log('onRowRender', args);
        appendElement(`Grid <b>onRowRender</b> event is triggered<hr>`);
    }
    const handleAggregateRowRender = (args: any) => {
        console.log('onAggregateRowRender', args);
        appendElement(`Grid <b>onAggregateRowRender</b> event is triggered<hr>`);
    }
    const handleGridError = (args: any) => {
        console.log('onGridError', args);
        appendElement(`Grid <b>onGridError</b> event is triggered<hr>`);
    }
    const onDataStateRequest = (args: any) => {
        console.log('onDataStateRequest', args);
        appendElement(`Grid <b>onDataStateRequest</b> event is triggered<hr>`);
    }
    const onDataChangeRequest = (args: any) => {
        console.log('onDataChangeRequest', args);
        appendElement(`Grid <b>onDataChangeRequest</b> event is triggered<hr>`);
    }
    const onFilterStart = (args: any) => {
        console.log('onFilterStart', args);
        appendElement(`Grid <b>onFilterStart</b> event is triggered<hr>`);
    }
    const onFilterComplete = (args: any) => {
        console.log('onFilterComplete', args);
        appendElement(`Grid <b>onFilterComplete</b> event is triggered<hr>`);
    }
    const onSortStart = (args: any) => {
        console.log('onSortStart', args);
        appendElement(`Grid <b>onSortStart</b> event is triggered<hr>`);
    };
    const onSortComplete = (args: any) => {
        console.log('onSortComplete', args);
        appendElement(`Grid <b>onSortComplete</b> event is triggered<hr>`);
    };
    const onSearchStart = (args: any) => {
        console.log('onSearchStart', args);
        appendElement(`Grid <b>onSearchStart</b> event is triggered<hr>`);
    };
    const onSearchComplete = (args: any) => {
        console.log('onSearchComplete', args);
        appendElement(`Grid <b>onSearchComplete</b> event is triggered<hr>`);
    };
    const onRowDoubleClick = (args: any) => {
        console.log('onRowDoubleClick', args);
        appendElement(`Grid <b>onRowDoubleClick</b> event is triggered<hr>`);
    };
    const onToolbarClick = (args: any) => {
        console.log('onToolbarClick', args);
        appendElement(`Grid <b>onToolbarClick</b> event is triggered<hr>`);
    };
    const onCellFocused = (args: any) => {
        console.log('onCellFocused', args);
        appendElement(`Grid <b>onCellFocused</b> event is triggered<hr>`);
    };
    const onCellClick = (args: any) => {
        console.log('onCellClick', args);
        appendElement(`Grid <b>onCellClick</b> event is triggered<hr>`);
    };
    const onCellFocus = (args: any) => {
        console.log('onCellFocus', args);
        appendElement(`Grid <b>onCellFocus</b> event is triggered<hr>`);
    };
    const onRowSelecting = (args: any) => {
        console.log('onRowSelecting', args);
        appendElement(`Grid <b>onRowSelecting</b> event is triggered<hr>`);
    };
    const onRowSelected = (args: any) => {
        console.log('onRowSelected', args);
        appendElement(`Grid <b>onRowSelected</b> event is triggered<hr>`);
    };
    const onRowDeselecting = (args: any) => {
        console.log('onRowDeselecting', args);
        appendElement(`Grid <b>onRowDeselecting</b> event is triggered<hr>`);
    };
    const onRowDeselected = (args: any) => {
        console.log('onRowDeselected', args);
        appendElement(`Grid <b>onRowDeselected</b> event is triggered<hr>`);
    };
    const onPageChangeStart = (args: any) => {
        console.log('onPageChangeStart', args);
        appendElement(`Grid <b>onPageChangeStart</b> event is triggered<hr>`);
    };
    const onPageChangeComplete = (args: any) => {
        console.log('onPageChangeComplete', args);
        appendElement(`Grid <b>onPageChangeComplete</b> event is triggered<hr>`);
    };
    const onRowEdit = (args: any) => {
        console.log('onRowEdit', args);
        appendElement(`Grid <b>onRowEdit</b> event is triggered<hr>`);
    };

    const footerMax = (props: any) => {
        return (<span>Max: {props.Max}</span>);
    };

    const handleClear = () => {
        const log = document.getElementById('EventLog');
        if (log) {
            log.innerHTML = '';
        }
        console.clear();
    }

    return (
        <>
            <div className="" style={{ padding: '20px 0 0 0' }}>
                <Grid
                    ref={gridRef}
                    dataSource={orderData}
                    sortSettings={{ enabled: true }}
                    pageSettings={{ enabled: true }}
                    filterSettings={{ enabled: true }}
                    searchSettings={{ enabled: true }}
                    toolbar={['Search']}
                    onLoad={handleLoad}
                    onGridInit={handleGridInit}
                    onDataLoadStart={handleDataLoadStart}
                    onDataLoaded={handleDataLoaded}
                    onHeaderCellRender={handleHeaderCellRender}
                    onAggregateCellRender={handleAggregateCellRender}
                    onCellRender={handleCellRender}
                    onRowRender={handleRowRender}
                    onAggregateRowRender={handleAggregateRowRender}
                    onGridError={handleGridError}
                    onDataStateRequest={onDataStateRequest}
                    onDataChangeRequest={onDataChangeRequest}
                    onFilterStart={onFilterStart}
                    onFilterComplete={onFilterComplete}
                    onSortStart={onSortStart}
                    onSortComplete={onSortComplete}
                    onSearchStart={onSearchStart}
                    onSearchComplete={onSearchComplete}
                    onRowDoubleClick={onRowDoubleClick}
                    onToolbarClick={onToolbarClick}
                    onCellFocused={onCellFocused}
                    onCellClick={onCellClick}
                    onCellFocus={onCellFocus}
                    onRowSelecting={onRowSelecting}
                    onRowSelected={onRowSelected}
                    onRowDeselecting={onRowDeselecting}
                    onRowDeselected={onRowDeselected}
                    onPageChangeStart={onPageChangeStart}
                    onPageChangeComplete={onPageChangeComplete}
                    onRowEdit={onRowEdit}
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
                        <Column field="Verified" headerText="Verified" edit={{ type: "booleanedit" }} width="90" displayAsCheckBox={true} />
                    </Columns>
                    <Aggregates>
                        <AggregateRow>
                            <AggregateColumn field='Freight' type='Max' footerTemplate={footerMax} format={{ format: 'C2' }} />
                        </AggregateRow>
                    </Aggregates>
                </Grid>
                <div className="eventarea" style={{ marginTop: '15px', height: '245px', overflow: 'auto' }}>
                    <span className="EventLog" id="EventLog" style={{ wordBreak: 'normal' }}></span>
                </div>
                <div className="evtbtn" style={{ paddingBottom: '10px' }}>
                    <button id="clear" onClick={handleClear}>Clear</button>
                </div>
            </div>
        </>
    )
}

export default GridAllEvents;
