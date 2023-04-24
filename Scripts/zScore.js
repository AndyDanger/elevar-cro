let controlSessions = variantSessions[0] || 0
let controlTransactions = variantTransactions[0] || 0
let controlCvr = controlSessions && controlTransactions ? controlTransactions / controlSessions : 0
let controlStandardError = controlCvr ? Math.sqrt((controlCvr * (1 - controlCvr) / controlSessions)) : 0

for (let variantIndex = 0; variantIndex < variantSessions.length; variantIndex++) {
    let sessions = variantSessions[variantIndex] || 0
    let transactions = variantTransactions[variantIndex] || 0
    let cvr = sessions && transactions ? transactions / sessions : 0
    let standardError = cvr ? Math.sqrt((cvr * (1 - cvr) / sessions)) : 0
    let zScore = controlStandardError && standardError ? (controlCvr - cvr) / Math.sqrt(Math.pow(controlStandardError, 2) + Math.pow(standardError, 2)) : 0
    let pValue = GetZPercent(zScore) || 0
}

// Found this online?
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

    return sum;
}