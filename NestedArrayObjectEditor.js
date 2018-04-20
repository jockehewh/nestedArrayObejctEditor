module.exports = {
    NestedArrayObjectEditor: async function(valuetype){
        var temp = []
        this.forEach((item)=>{
            for ( var key in item ){
                if(key === valuetype){
                    temp.push(item[key])
                }
            }
        })
        return temp
    },
    rebuild: async function(data, valuetype){
        var index = 0
        this.forEach(innerObj => {
            for( var key in innerObj ){
                if( key === valuetype ){
                    innerObj[key] = data[index]
                    index++;
                }
            }
        })
        index = 0
    }
}
