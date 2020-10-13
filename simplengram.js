function frequent(ngrams)
{
    const obj={} // it will contain the key(ngram) value will be its frequency


    ngrams.forEach(element => {

        if(obj[element])
        {
            obj[element]++
        }
        else{
            obj[element]=1;
        }
        
    });

    var max = 0;



return max;
   
    

}

function simplengram(n ,stringvalue)
{
  const nGrams=[];
  

    index = stringvalue.length - n + 1 // formula
    //
   
  
  
   
    while (index--) {
      nGrams.push( stringvalue.slice(index, index + n))
    }

    console.log(nGrams);

    return frequent(nGrams)

}