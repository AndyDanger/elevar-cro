import { initializeBlock, useBase, useRecords, useRecordIds } from '@airtable/blocks/ui';
import React from 'react';
const MAX_RECORDS_PER_UPDATE = 50; // rate limiting
const TABLE_NAME = `Make.com Import` // Need to update these if the record names ever change
const pValueName = `p-Value`
const zScoreName = `z-Score`

function PValue() {
    const base = useBase();
    const table = base.getTableByName(TABLE_NAME);
    const records = useRecords(table.selectRecords());
    // Update cell values
    const updates = records.map(record => ({
        id: record.id,
        fields: {
            [pValueName]: GetZPercent(record.getCellValue(zScoreName)) 
        },
    }));


    updateRecordsInBatches(updates, table)
    return <div>
        <div>
            p-Value field name must be "{pValueName}".
        </div>
        <div>
            z-Score field name must be "{zScoreName}".
        </div>
        <div>
            Updating {updates.length} out of {records.length} records in "{TABLE_NAME}" table.
        </div>
        <pre>
            {JSON.stringify(updates, null, "\t")}
        </pre>
    </div>

}

function GetZPercent(z) {
    //z == number of standard deviations from the mean
    //if z is greater than 6.5 standard deviations from the mean
    //the number of significant digits will be outside of a reasonable 
    //range
    if (z < -6.5)
        return 0.0;
    if (z > 6.5)
        return 1.0;

    let factK = 1;
    let sum = 0;
    let term = 1;
    let k = 0;
    let loopStop = Math.exp(-23);
    while (Math.abs(term) > loopStop) {
        term = .3989422804 * Math.pow(-1, k) * Math.pow(z, k) / (2 * k + 1) / Math.pow(2, k) * Math.pow(z, k + 1) / factK;
        sum += term;
        k++;
        factK *= k;

    }
    sum += 0.5;

    return sum || null; // Leaves the record blank if the sum is 0
}

async function updateRecordsInBatches(updates, table) {
    // Saves the updates in batches of MAX_RECORDS_PER_UPDATE to stay under size
    // limits.
    let i = 0;
    while (i < updates.length) {
        const updateBatch = updates.slice(i, i + MAX_RECORDS_PER_UPDATE);
        // await is used to wait for the update to finish saving to Airtable
        // servers before continuing. This means we'll stay under the rate
        // limit for writes.
        await table.updateRecordsAsync(updateBatch);
        i += MAX_RECORDS_PER_UPDATE;
    }
}

initializeBlock(() => <PValue />);
