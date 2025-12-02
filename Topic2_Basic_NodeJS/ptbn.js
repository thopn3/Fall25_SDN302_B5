/*
const giaiPTBac1 = (a, b, callback) => {
    if(a === 0){
        if(b===0){
            callback("PT vô số nghiệm", null);
        }else{
            callback("PT vô nghiệm", null);
        }
    }else{
        let x = -b/a;
        callback(null, [x.toFixed(2)]);
    }
};
*/

// PP1: sử dụng đối tượng Promise -> Loại bỏ Callback Hell
/*
const giaiPTBac1 = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a === 0){
            if(b===0){
                reject("PT vô số nghiệm");
            }else{
                reject("PT vô nghiệm");
            }
        }else{
            let x = -b/a;
            resolve([x.toFixed(2)]);
        }
    })
}
*/

// PP2: Dùng async/await loại bỏ Callback Hell -> Tường minh cho chức năng
const giaiPTBac1 = (a, b) => {
    if(a===0){
        if(b===0){
            throw new Error("PT vô số nghiệm");
        }else{
            throw new Error("PT vô nghiệm");
        }
    }else{
        return [(-b/a).toFixed(2)];
    }
}

module.exports = giaiPTBac1;