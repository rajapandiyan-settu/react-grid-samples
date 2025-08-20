import { useRef, useState, useCallback } from 'react';
import { Grid, type GridRef, Columns, Column, Aggregates, AggregateColumn, AggregateRow, type SortSettings, type SortDirection, type PageSettings, type ColumnHeaderTemplateProps, type ColumnTemplateProps, type ColumnProps, type EditTemplateProps } from '@syncfusion/react-grid';
import { orderData, generateOrders, dataSource, type Order } from '../dataSource'
import { Checkbox } from '@syncfusion/react-buttons';
import { Description, Location, TimelineMonth, User } from '@syncfusion/react-icons';
import { Button } from "@syncfusion/react-buttons";
import { NumericTextBox } from '@syncfusion/react-inputs';
import { DatePicker } from '@syncfusion/react-calendars';
import { DropDownList, type ChangeEventArgs } from '@syncfusion/react-dropdowns';
import { DataUtil } from '@syncfusion/react-data';


function GridFilterAndEditTemplates() {
    const gridRef = useRef<GridRef>(null);
    const countries: { [key: string]: unknown }[] = [
        { text: 'USA', value: 'USA' },
        { text: 'Canada', value: 'Canada' },
        { text: 'Mexico', value: 'Mexico' },
    ];
    /**
     * Returns a dropdown filter template for the ShipCountry column.
     * @param args - Column context for filtering.
     */
    const templateOptionsDropDown = useCallback((args: Record<string, string>) => {
        const distinctData = DataUtil.distinct(orderData, (args.column as ColumnProps).field as string, true) as any;
        const shipCountryDistinctData = ['Clear', ...distinctData.filter((item: any): item is any & { ShipCountry: string } => !!item.ShipCountry).map((item: any) => item.ShipCountry)];
        return (
            <div>
                <DropDownList dataSource={shipCountryDistinctData} fields={{ text: (args.column as ColumnProps).field as string, value: (args.column as ColumnProps).field as string }} onChange={handleShipCountryFiltering}></DropDownList>
            </div>
        )
    }, []);

    /**
     * Handles filtering logic for the ShipCountry column.
     * @param e - Dropdown change event.
     */
    const handleShipCountryFiltering = (e?: ChangeEventArgs) => {
        if (e?.value && e?.value != "Clear") {
            gridRef.current?.filterByColumn?.('ShipCountry', 'equal', e?.value as string);
        } else if (e?.value === "Clear") {
            gridRef.current?.clearFiltering?.();
        }
    }

    /**
     * Returns a numeric textbox filter template for the Freight column.
     */
    const templateNumericTextDropDown = useCallback(() => {
        return (
            <div className="component-section">
                <NumericTextBox onKeyUp={handleNumericFiltering} />
            </div>
        );
    }, []);

    /**
     * Handles filtering logic for the Freight column.
     * @param e - Keyboard event from numeric textbox.
     */
    const handleNumericFiltering = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            const value = (e.target as HTMLInputElement).value;
            if (value) {
                gridRef.current?.filterByColumn?.('Freight', 'equal', value);
            } else {
                gridRef.current?.clearFiltering?.();
            }
        }
    }

    /**
     * Returns a date picker filter template for the OrderDate column.
     */
    const templateDatePickertDropDown = useCallback(() => {
        return (
            <div className="component-section">
                <DatePicker onKeyUp={handleDateFiltering} />
            </div>
        );
    }, []);

    /**
     * Handles filtering logic for the OrderDate column.
     * @param e - Keyboard event from date picker.
     */
    const handleDateFiltering = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            const value = (e.target as HTMLInputElement).value;
            if (value) {
                gridRef.current?.filterByColumn?.('OrderDate', 'equal', value);
            } else {
                gridRef.current?.clearFiltering?.();
            }
        }
    }

    const countryTemplate = useCallback((props?: EditTemplateProps) => (
        <DropDownList
            dataSource={countries as { [key: string]: object }[]}
            fields={{ text: 'text', value: 'value' }}
            value={(props?.rowData as any).ShipCountry}
            onChange={(args?: ChangeEventArgs) => { props?.onChange(args?.value as string); }}
        />
    ), [countries]);

    return (
        <>
            <div className="container">
                <main className="sub-content">
                    <Grid
                        ref={gridRef}
                        dataSource={orderData}
                        sortSettings={{ enabled: true }}
                        pageSettings={{ enabled: true, pageSize: 12 }}
                        filterSettings={{ enabled: true }}
                        searchSettings={{ enabled: true }}
                        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
                        editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
                        height={300}
                    >
                        <Columns>
                            <Columns>
                                <Column field='OrderID' headerText='Order ID' isPrimaryKey={true} validationRules={{ required: true }} textAlign='Right' width='100' />
                                <Column field='CustomerID' headerText='Customer ID' width='120' validationRules={{ required: true }} />
                                <Column field='Freight' headerText='Freight' width='130' format='C2' textAlign='Right' filterTemplate={templateNumericTextDropDown} />
                                <Column field='OrderDate' headerText='Order Date' width='130' type='date' edit={{ type: 'datepickeredit' }} format='yMd' textAlign='Right' filterTemplate={templateDatePickertDropDown} />
                                <Column field='ShipCountry' headerText='Ship Country' width='140' filterTemplate={templateOptionsDropDown} editTemplate={countryTemplate} />
                                <Column field='ShipCity' headerText='Ship City' width='120' />
                                <Column field='ShipAddress' headerText='Ship Address' width='160' />
                                <Column field='ShipName' headerText='Ship Name' width='140' />
                                <Column field="Verified" headerText="Verified" edit={{ type: "booleanedit" }} width="90" displayAsCheckBox={true} />
                            </Columns>
                        </Columns>
                    </Grid>
                </main>
            </div >
        </>
    )
}

export default GridFilterAndEditTemplates;