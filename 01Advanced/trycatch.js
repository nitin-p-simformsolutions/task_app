const convertRs = (dollar)=>{
    if (typeof dollar === 'number')
        return dollar*64
    else{
        throw Error('Amount needs to be in number')
    }
}

try {
    console.log(convertRs('Five'));
} catch (error) {
    console.log(error);
    }



