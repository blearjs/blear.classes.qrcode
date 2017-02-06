/**
 * blear.classes.qrcode
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 */


'use strict';


var object = require('blear.utils.object');
var Class = require('blear.classes.class');

var QRCode3rd = require('./_qrcode');

var defaults = {};
var QRCode = Class.ify(QRCode3rd).extend({
    constructor: function (options) {
        QRCode.parent(this, object.assign({}, defaults, options));
    },

    /**
     * 绘制二维码
     * @param data {String}
     * @returns {QRCode}
     */
    draw: function (data) {
        QRCode.invoke('draw', this, data);
        return this;
    },

    /**
     * 返回二维码的模块数量
     * @returns {Number}
     */
    getModuleCount: function () {
        return QRCode.invoke('getModuleCount', this);
    },

    /**
     * 判断当前模块是否为深色
     * @param row {Number} 行
     * @param col {Number} 列
     * @returns {Boolean}
     */
    isDark: function (row, col) {
        return QRCode.invoke('isDark', this, row, col);
    }
});

QRCode.defaults = defaults;
module.exports = QRCode;
