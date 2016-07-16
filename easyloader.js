new (function() {
  var ext = this;
	
	var descriptor = {
		blocks: [
			[' ', 'Load extension %m.name', 'loadExtension', '']
		],
		'menus': {
      'name': ['SUN', 'CLOUD', 'MOON', 'CASTLE', 'TREE', 'DESERT', 'FISH', 'CAT', 'LADYBIRD', 'ALL']
    },
    url: 'https://github.com/savaka2/scratch-extensions/wiki/Link-Opener-extension'
	};
	
	ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.loadExtension = function(name) {
    	ScratchExtensions.loadExternalJS(name);
    }
    
    ext._shutdown = function() {};
	

ScratchExtensions.register('LOADER', descriptor, ext);})();
