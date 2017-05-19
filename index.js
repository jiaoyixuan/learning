function HashTable(){
    var table = [];
    var loseloseHashCode = function(key){
        var hash = 0;
        for(var i = 0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    var ValuePair = function(key,value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return '['+this.key+' - '+ this.value +']';
        };

        this.put = function(key,value){
            var position = loseloseHashCode(key);

            if(table[position] == undefined){
                table[position] = new LinkedList();
            }

        }
    };

    this.put = function(key,value){
        var position = loseloseHashCode(key);
        console.log(position + '-'+key);
        table[position] = value;
    };

    this.get = function(key){
        return table[loseloseHashCode(key)];
    };

    this.remove = function(key){
        table[loseloseHashCode(key)] = undefined;
    }
}