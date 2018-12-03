'use strict'

const v8 = require('v8');

console.log(v8.getHeapSpaceStatistics());

const totalHeapSize = v8.getHeapSpaceStatistics()[5].space_available_size;

let totalHeapSizeinGB = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2);

console.log('Total heap size (bytes) ' + totalHeapSize + 'GB ' + totalHeapSizeinGB);