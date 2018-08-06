var BrotherPrinter = function () {}
BrotherPrinter.prototype = {
    findNetworkPrinters: function (onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'findNetworkPrinters', [])
    },

    findBluetoothPrinters: function (onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'findBluetoothPrinters', []);
    },

    findPrinters: function (onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'findPrinters', []);
    },

    setPrinter: function (printer, onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'setPrinter', [printer]);
    },

    printViaSDK: function (data, paperSize, callback) { // paperSize is not used by Android.
        if (!data || !data.length) {
            console.log('No data passed in. Expects a bitmap.')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'printViaSDK', [data, paperSize])
    },

    sendUSBConfig: function (data, callback) {
        if (!data || !data.length) {
            console.log('No data passed in. Expects print payload string.')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'sendUSBConfig', [data])
    },

    getLabelInfo: function(onSuccess, onError) {
        cordova.exec(onSuccess, onError, 'BrotherPrinter', 'getLabelInfo', []);
    }
}
var plugin = new BrotherPrinter()
module.exports = plugin
