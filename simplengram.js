function simplengram(n ,stringvalue)
{
  const nGrams=[];
  

    index = stringvalue.length - n + 1 // formula
    //
    console.log(stringvalue.length);
    console.log(index);
  
  
  
   
    while (index--) {
      nGrams[index] = stringvalue.slice(index, index + n)
    }

    return nGrams

}