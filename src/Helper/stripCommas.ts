function stripCommas(val:string): string[] {
   let newArr =  val.split(',');
    return newArr;
}

export {stripCommas};