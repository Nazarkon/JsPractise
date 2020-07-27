const _ = {};

_.map = function(list, callback) {
		let storange = [];
    for(let i = 0; i < list.length; i++){
    		storange.push(callback(list[i], i ,list))
    }
    
    return storange
}

_.map([1,2,3], function(val){return val + 1;})
