
type Primitive_1 = string | number | boolean;

function formatValue(value:Primitive_1):Primitive_1{
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    else if(typeof value === 'number'){
        return value*10;
    }
    else{
        return !value;
    }
}





