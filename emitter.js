var events = require('events');
var emitter = new events.EventEmitter();

//注册事件监听器,在事件触发后依次执行
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2);
});

//触发someEvent,带参数
emitter.emit('someEvent', 'byvoid'调, 1991);

