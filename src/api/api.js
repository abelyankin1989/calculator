let api = {
    param1: null,
    param2: null,
    operator: null,

    isNumber : (item) => {
        return /[0-9]+/.test(item);
    },

    hasDot : (item) => {
        return /[\.+]+/.test(item);
    },

    calculate: (arg1, arg2, btnName) => {
        
        this.operator = btnName;
        let result;

        try{
            if(btnName === 'sqr') {

                if(arg1 > 0){
                    result = eval(Math.sqrt(Number(arg1)));
                } else{
                    return arg1;
                }

            } else {
                result = eval(Number(arg1) + this.operator + Number(arg2));
            }
        } catch(error) {
            console.error(error);
            
            return;
        } 

        
        return result;
    }
}

export default api;