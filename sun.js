new (function() {
  var ext = this;
  var descriptor = {
    blocks: [
      [' ', 'SUN: digital pin %m.pin setting %m.dsetting', 'setDigital', '1', 'off'],
      [' ', 'SUN: pwm pin %m.ppin setting %n', 'setPwm', '1', '100'],
      [' ', 'SUN: digital pin %m.pin get', 'getDigital', '1'],
      [' ', 'SUN: pwm pin %m.ppin get', 'getPwm', '1'],
      [' ', 'SUN: set ip address %s', 'setIP', '192.168.2.102'],
      ['r', 'SUN: get ip address', 'getIP']
    ],
    'menus': {
      'pin': ['1', '2', '3'],
      'dsetting': ['on', 'off'],
      'ppin': ['1', '2']
     },
    url: 'https://github.com/savaka2/scratch-extensions/wiki/Link-Opener-extension'
  };
  ext.ip = '';
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {status: 2, msg: 'Device connected'};
  };
  ext.setIP = function(newIP) {
    ext.ip = newIP;
  }
  ext.getIP = function() {
    return ext.ip;
  }
  ext.getPwm = function(pin) {
  };
  ext.setPwm = function(pin, setting) {
    var p = 4;
    if(pin == 2) {
      p = 5;
    }
    var url = 'http://192.168.0.4/gpio' + p + '/' + setting;
    $.ajax({
      type: 'POST',
      url: url,
      async: false,
      success: function(response) {
      }
    });
  };
  ext.getDigital = function(pin) {
  };
  ext.setDigital = function(pin, setting) {
    var s = 1;
    if(setting == 'off') {
      s = 0;
    }
    var p = 12;
    if(pin == 1) {
      p = 12;
    }
    else if(pin == 2) {
      p = 13;
    }
    else if(pin == 3) {
      p = 14;
    }
    p = 2;
    var url = 'http://192.168.0.4/gpio' + p + '/' + s; 
$.ajax({
type: 'POST', 
url: url,
async: false,
success: function(response) {
}
});
};
ScratchExtensions.register('ONE', descriptor, ext);})();
