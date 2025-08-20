import { useRef, useState, useCallback } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type SortSettings, type SortDirection, type PageSettings, type ColumnHeaderTemplateProps, type ColumnTemplateProps } from '@syncfusion/react-grid';
import { orderData, generateOrders, dataSource, type Order } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { Description, Location, TimelineMonth, User } from '@syncfusion/react-icons';
import { Button } from "@syncfusion/react-buttons";
import { NumericTextBox } from '@syncfusion/react-inputs';


function GridTemplates() {
    const gridRef = useRef<GridRef>(null);
    const [gridData, setGridData] = useState(generateOrders(10000));
    const [pageSettings, setPageSettings] = useState<PageSettings>({ enabled: true });
    const emptyRecordTemplate = () => {
        let src: string = '';
        if (document.body.classList.value.indexOf('dark') > -1 || document.body.classList.value.indexOf('highcontrast') > -1) {
            src = "https://ej2.syncfusion.com/react/demos/src/grid/images/emptyRecordTemplate_dark.svg";
        }
        else {
            src = "https://ej2.syncfusion.com/react/demos/src/grid/images/emptyRecordTemplate_light.svg";
        }
        return (
            <div className='emptyRecordTemplate'>
                <img src={src} className="sf-emptyRecord" alt="No record" />
                <span>There is no data available to display at the moment.</span>
            </div>
        );
    };
    const locationHeaderTemplate = useCallback((props?: ColumnHeaderTemplateProps) => {
        return (<div className='sf-header-template-center'>
            {props?.column.headerText}
            <Location className='sf-location' width={16} height={16} />
        </div>);
    }, []);
    const headerTemplateElement = useCallback((props?: ColumnHeaderTemplateProps) => {
        return <div><b>{props?.column.headerText}</b></div>;
    }, []);
    const columnTemplateElement = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        if (props?.column.field === 'OrderDate') {
            let dateValue: any = (props?.data as any)[(props?.column as any).field]
            return (
                <div className='image'>
                    {new Date(dateValue).toDateString()}
                </div>
            );
        }
        return (
            <div className='image'>
                {(props?.data as any)[(props?.column as any).field]}
            </div>
        );
    }, []);

    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className='sidebar-items'>
                        <span className='label'>Page Size:</span>
                        <span style={{ padding: '0 0 0 10px' }}>
                            <NumericTextBox
                                placeholder="Enter page size"
                                width={110}
                                defaultValue={12}
                                min={1}
                                max={2000}
                                onChange={(args) => { setPageSettings({ ...gridRef.current?.pageSettings, pageSize: (args?.value as number) }) }}
                            />
                        </span>
                    </div>
                    <div className='sidebar-items'>
                        <Checkbox defaultChecked={true} label='Display Data' onChange={(args) => { const checked = args.value; setGridData(checked ? generateOrders(1000) : []); }} />
                    </div>
                </aside >
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={gridData}
                        sortSettings={{ enabled: true }}
                        pageSettings={pageSettings}
                        filterSettings={{ enabled: true }}
                        searchSettings={{ enabled: true }}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
                        height={300}
                        emptyRecordTemplate={emptyRecordTemplate}
                    >
                        <Columns>
                            <Columns>
                                <Column field='OrderID' headerText='Order ID' isPrimaryKey={true} validationRules={{ required: true }} textAlign='Right' width='100' headerTemplate={headerTemplateElement} template={columnTemplateElement} />
                                <Column field='CustomerID' headerText='Customer ID' width='120' validationRules={{ required: true }} headerTemplate={headerTemplateElement} />
                                <Column field='Freight' headerText='Freight' width='130' format='C2' textAlign='Right' headerTemplate={headerTemplateElement} />
                                <Column field='OrderDate' headerText='Order Date' width='130' type='date' edit={{ type: 'datepickeredit' }} format='yMd' textAlign='Right' headerTemplate={headerTemplateElement} template={columnTemplateElement} />
                                <Column field='ShipName' headerText='Ship Name' width='140' headerTemplate={headerTemplateElement} template={columnTemplateElement} />
                                <Column field='ShipAddress' headerText='Ship Address' width='160' headerTemplate={locationHeaderTemplate} template={columnTemplateElement} />
                                <Column field='ShipCity' headerText='Ship City' width='120' headerTemplate={locationHeaderTemplate} template={columnTemplateElement} />
                                <Column field='ShipCountry' headerText='Ship Country' width='140' headerTemplate={locationHeaderTemplate} template={columnTemplateElement} />
                                <Column field='ShipRegion' headerText='Ship Region' width='120' headerTemplate={locationHeaderTemplate} />
                                <Column field="Verified" headerText="Verified" width="90" displayAsCheckBox={true} headerTemplate={headerTemplateElement} template={columnTemplateElement} />
                            </Columns>
                        </Columns>
                    </Grid>
                </main>
            </div >
        </>
    )
}

export default GridTemplates;