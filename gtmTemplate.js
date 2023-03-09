// Enter your template code here.
const callInWindow = require('callInWindow');
const copyFromWindow = require('copyFromWindow');
const createQueue = require('createQueue');
const generateRandom = require('generateRandom');
const gtagSet = require('gtagSet');
const localStorage = require('localStorage');
const log = require('logToConsole');
const makeInteger = require('makeInteger');
const makeString = require('makeString');
const queryPermission = require('queryPermission');
const setInWindow = require('setInWindow');
const toBase64 = require('toBase64');

log('data =', data);

let uniqueId = data.testName + '|' + makeString(data.gtmTagId);
log(uniqueId);
let base64Id = toBase64(uniqueId);
log(base64Id);

const dataLayerPush = createQueue('dataLayer');
let variants = data.variants;
let elevarCroTests = localStorage.getItem('elevarCroTests');

if (elevarCroTests[base64Id]) {
    variants.forEach(variant => {
        variant.shouldTrigger = elevarCroTests[base64Id] == variant.name;
    });
} else {
    const rand = generateRandom(0, 100);
    log('rand =', rand);
    let count = 0;
    variants.forEach(variant => {
        let percentTraffic = makeInteger(variant.percentTraffic);
        variant.shouldTrigger = rand < percentTraffic + count && rand > count;
        count += percentTraffic;
        log(variant);
        if (!variant.shouldTrigger) return;
        elevarCroTests[base64Id] = variant.name;
        localStorage.setItem('elevarCroTests', elevarCroTests);
    });
    log('count =', count);
    if (count > 100) {
        data.gtmOnFailure('Percent of traffic greater than 100%');
    }

}

dataLayerPush({ 'event': 'testEvent', 'variants': variants });

// Call data.gtmOnSuccess when the tag is finished.
data.gtmOnSuccess();