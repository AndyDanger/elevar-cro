function pullTests() {
    var clientsSheet = SpreadsheetApp.getActive().getSheetByName('Clients');
    var testsSheet = SpreadsheetApp.getActive().getSheetByName('New');
    testsSheet.clear()
    var startRow = 2; // First row of data to process.
    var startColumn = 1; //First Column to process, in case that changes.

    console.log(Session.getActiveUser().getEmail())

    var numRows = clientsSheet.getLastRow(); // Number of rows to process
    var numCols = clientsSheet.getLastColumn(); //Also the number of columns to process, again in case that changes.

    for (var rowIndex = startRow; rowIndex < 4; rowIndex++) {
        var pageID = getByName(clientsSheet, 'ℹ️  Page ID', rowIndex)
        if (!pageID) {
            rowIndex = numRows
            return
        }
        var name = getByName(clientsSheet, '🔖  Name', rowIndex)
        var gaView = getByName(clientsSheet, '🔗  GA View', rowIndex)
        console.log(gaView)
        var viewId = gaView.match(/p(\d+)/)[1]
        var userId = gaView.match(/authuser=(\d)/)[1]
        if (userId == '3') {
            continue
        }
        var tableId = 'ga:' + viewId;
        var startDate = 'yesterday';
        var endDate = 'yesterday';
        var metrics = ['ga:sessions'];
        var options = {
            'dimensions': 'ga:experimentName',
            'filters': 'ga:experimentName!~Personalization|Deployed variant|Thesis|Dev',
            //'sort': '',
            //'segment': '',
            'samplingLevel': 'HIGHER_PRECISION',
            'max-results': '10000'
        }

        var report = gaGet(tableId, startDate, endDate, metrics, options);
        var data = report.getRows();
        var nextRow = getFirstEmptyRow(testsSheet);
        console.log(nextRow)
        testsSheet.getRange(nextRow, 1).setValue(name);
        testsSheet.getRange(nextRow, 3).setValue('Sessions');
        testsSheet.getRange(nextRow, 5).setValue('Active Tests');
        testsSheet.getRange(nextRow, 4).setValue('Start Date');
        testsSheet.getRange(nextRow, 6).setValue('# Tests Last 30 Days');
        if (data) {
            testsSheet.getRange(nextRow + 1, 5).setValue(data.length);
            var writeRange = testsSheet.getRange(nextRow + 1, 2, data.length, data[0].length);
            writeRange.setValues(data);
        }
        else {
            testsSheet.getRange(nextRow + 1, 5).setValue(0);
            testsSheet.getRange(nextRow + 1, 3).setValue('-');
        }

        if (data) {
            var row = nextRow + 1;
            for (var j = 0; j < data.length; j++) {
                var expName = data[j][0].replace(/,/g, "\\,");
                var report = gaGet(tableId, '90daysAgo', endDate, metrics, options);
                var data2 = report.getRows();
                if (data2) {
                    testsSheet.getRange(row, 4).setValue(data2[0][1]);
                    row = row + 1;
                }
            }
        }
        var report = gaGet(tableId, '30daysAgo', endDate, metrics, options);
        var data = report.getRows();
        if (data) {
            //var startRow = getFirstEmptyRow();
            //sheet.getRange(startRow, 1).setValue(names[i]);
            //sheet.getRange(startRow, 2).setValue('# Tests Last Month');
            testsSheet.getRange(startRow + 1, 6).setValue(data.length);
            //var writeRange = sheet.getRange(startRow+1, 2, data.length, data[0].length);
            //writeRange.setValues(data);
        }
        else {
            testsSheet.getRange(startRow + 1, 6).setValue(0);
        }

    }
}


function getByName(sheet, colName, row) {
    var data = sheet.getDataRange().getValues();
    var col = data[0].indexOf(colName);
    if (col != -1) {
        return data[row - 1][col];
    }
}

function gaGet(tableId, startDate, endDate, metrics, options) {
    // Apply standard options
    options = options || {};
    options['max-results'] = options['max-results'] || '10000';
    // If errors persist up to 5 times then terminate the program.
    for (var i = 0; i < 5; i++) {
        try {
            return Analytics.Data.Ga.get(tableId, startDate, endDate, metrics, options); // 503
        } catch (err) {
            // https://developers.google.com/analytics/devguides/reporting/core/v3/coreErrors
            if (err.message.indexOf('a server error occurred') > -1) {
                Logger.log('Backend Error');
                // Note: Don't listen to Google's reply and retry request after 2 minutes
                Utilities.sleep(2 * 60 * 1000);
            } else if (err.message.indexOf('User Rate') > -1) {
                Logger.log('Rate Limit Error');
                // Exponential Backoff
                Utilities.sleep(1000 * Math.pow((i + 1), 2));
            } else if (err.message.indexOf('too many concurrent connections') > -1) {
                Logger.log('Concurrent Connections Error');
                // Exponential Backoff
                Utilities.sleep(1000 * Math.pow((i + 1), 2));
            } else {
                Logger.log(err);
                throw err;
            }
        }
    }
    throw 'Error. Max retries reached';
}

function getFirstEmptyColumn(sheet) {
    var row = sheet.getRange('1:1');
    var values = row.getValues(); // get all data in one call
    var ct = 0;
    while (values[0][ct] != "") {
        ct++;
    }
    return (ct + 1);
}
function getFirstEmptyRow(sheet) {
    var column = sheet.getRange('C:C');
    var values = column.getValues(); // get all data in one call
    var ct = 0;
    while (values[ct] && values[ct][0] != "") {
        ct++;
    }
    return (ct + 1);
}
