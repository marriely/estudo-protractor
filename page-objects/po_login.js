

var Login = function() {}

Login.prototype = Object.create({}, {

email: {get: function() {return element.all(by.className('el-input__inner')).get(0) }},

senha: {get: function() {return element.all(by.className('el-input__inner')).get(1) }},

btn_entrar: {get: function(){return element(by.className('el-button credentials-actions-button el-button--default color-default credentials-actions-button-green')) }},




})

module.exports = Login;
