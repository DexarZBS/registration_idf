const checkFunction = (value, field, fieldValue) => {
    switch (field) {
        case "required": {
            if (fieldValue === true) {
                if (Array.isArray(value)) {
                    if (value === []) return false;
                    else return true
                } else {
                    if (value === "") return false;
                    else return true;
                }
            }else return true
        }
        case "minLength":{
            if (value.length < +fieldValue) return false;
            else return true
        }
        case 'maxLength':{
            if(value.length < +fieldValue) return true;
            else return false
        }
        case 'regExp':{
            const regex = new RegExp(fieldValue);
            return regex.test(value)
        }
        case 'minAge':{
            return value >= +fieldValue ? true : false;
        }
        case 'maxAge':{
            return value <= +fieldValue ? true : false
        }
        default:return true;
    }
}

export const functionCompare = (value, obj) => {
const compareArray = Object.entries(obj);
return compareArray.reduce((acc, element)=>{
    if (acc === true){
       return checkFunction(value, element[0], element[1])
    }else{
        return acc
    }
},true)
}
