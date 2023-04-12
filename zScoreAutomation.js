const MAX_RECORDS_PER_UPDATE = 50; // rate limiting
const TABLE_NAME = `Make.com Import` // Need to update these if the record names ever change
const pValueName = `p-Value`
const zScoreName = `z-Score`

console.log(`Hello, ${base.name}!`);
const table = base.getTable(TABLE_NAME);

let config = input.config();
let recordId = config.recordId;
console.log(`Updating record: ${recordId}`)

const queryResult = await table.selectRecordsAsync({ fields: ["p-Value", "z-Score"] });
let record = queryResult.getRecord(recordId)
// Update cell values
await table.updateRecordAsync(record, {
    // Change these names to fields in your base
    "p-Value": GetZPercent(record.getCellValue("z-Score"))
});


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

    return sum || undefined; // Leaves the record blank if the sum is 0
}