function getBenchmarkData() {
    let accounts = Analytics.Management.Accounts.list()
    if (!accounts) {
        Logger.log(`No accounts found`)
        return
    }

    accounts.getItems().forEach(accountItem => {
        let accountId = accountItem.getId()
        Logger.log(`accountId: ${accountId}`)
        let webProperties = Analytics.Management.Webproperties.list(accountId);
        if (!webProperties) {
            Logger.log(`No webproperties found`)
            return
        }
        webProperties.getItems().forEach(webPropertyItem => {
            let propertyName = webPropertyItem.name
            if (propertyName.match('Test|Dev|Staging')) {
                return
            }
            let webPropertyId = webPropertyItem.getId()
            Logger.log(`propertyName: ${propertyName}`)
            Logger.log(`webPropertyId: ${webPropertyId}`)
            let views = Analytics.Management.Profiles.list(accountId, webPropertyId)
            if (!views || !views.getItems().length) {
                Logger.log(`No views found`)
                return
            }
            let viewId = views.getItems()[0].getId()
            Logger.log(`viewId: ${viewId}`)
            let tableId = `ga:${viewId}`
            let sheetName = 'help2022'
            let startDate = '2022-10-02'
            let endDate = '2022-11-19'
            let spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
            let sheet = spreadsheet.getSheetByName(sheetName)
            let metrics = ['ga:transactions, ga:transactionsPerSession, ga:sessions']
            let options = {
                'dimensions': 'ga:week',
                'filters': 'ga:transactions>25',
                'sort': '-ga:transactions',
                //'segment': '',
                'samplingLevel': 'HIGHER_PRECISION',
                'max-results': '100000'
            }
            let report = gaGet(tableId, startDate, endDate, metrics, options)
            let data = report.getRows()
            if (!data) {
                Logger.log(`No data found`)
                return
            }
            let startRow = getFirstEmptyRow()
            sheet.getRange(startRow, 5).setValue(propertyName)
            let writeRange = sheet.getRange(startRow, 1, data.length, data[0].length)
            writeRange.setValues(data)
        })
    })
}

// function myFunction() {
//     var accounts = Analytics.Management.Accounts.list();
//     if (accounts.getItems()) {
//         for (var i = 0; i < accounts.getItems().length; i++) {
//             var accountId = accounts.getItems()[i].getId();
//             Logger.log(`accountId: ${accountId}`)
//             var webProperties = Analytics.Management.Webproperties.list(accountId);
//             if (webProperties.getItems()) {
//                 for (var j = 0; j < webProperties.getItems().length; j++) {
//                     var propertyName = webProperties.getItems()[j].name;
//                     if (!propertyName.match('Test|Dev|Staging')) {
//                         var webPropertyId = webProperties.getItems()[j].getId();
//                         Logger.log(`webPropertyId: ${webPropertyId}`)
//                         var views = Analytics.Management.Profiles.list(accountId, webPropertyId);
//                         if (!views.getItems().length) {
//                             continue
//                         }
//                         var viewId = views.getItems()[0].getId();
//                         Logger.log(`viewId: ${viewId}`)
//                         var tableId = 'ga:' + viewId;
//                         var sheetName = 'help2022';
//                         var startDate = '2022-10-02';
//                         var endDate = '2022-11-19';
//                         var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//                         var sheet = spreadsheet.getSheetByName(sheetName);
//                         var metrics = ['ga:transactions, ga:transactionsPerSession, ga:sessions'];
//                         var options = {
//                             'dimensions': 'ga:week',
//                             'filters': 'ga:transactions>25',
//                             'sort': '-ga:transactions',
//                             //'segment': '',
//                             'samplingLevel': 'HIGHER_PRECISION',
//                             'max-results': '100000'
//                         }
//                         var report = gaGet(tableId, startDate, endDate, metrics, options);
//                         var data = report.getRows();
//                         if (data) {
//                             var startRow = getFirstEmptyRow();
//                             sheet.getRange(startRow, 5).setValue(propertyName);
//                             var writeRange = sheet.getRange(startRow, 1, data.length, data[0].length);
//                             writeRange.setValues(data);
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

function gaGet(tableId, startDate, endDate, metrics, options) {
    // Apply standard options
    options = options || {};
    options['max-results'] = options['max-results'] || '10000';
    // If errors persist up to 5 times then terminate the program.
    for (let i = 0; i < 5; i++) {
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

function getFirstEmptyRow() {
    let spr = SpreadsheetApp.getActiveSpreadsheet();
    let column = spr.getRange('A:A');
    let values = column.getValues(); // get all data in one call
    let ct = 0;
    while (values[ct] && values[ct][0] != "") {
        ct++;
    }
    return (ct + 1);
}
