// Factory returning a function that converts a value string to n-grams.
function nGram(n) {
    if (typeof n !== 'number' || isNaN(n) || n < 1 || n === Infinity) {
      throw new Error('`' + n + '` is not a valid argument for n-gram')
    }
  
    return grams
  
    // Create n-grams from a given value.
    function grams(value) {
      var nGrams = []
      var index
  
      if (value === null || value === undefined) {
        return nGrams
      }
  
      value = value.slice ? value : String(value)
      console.log(value);
      index = value.length - n + 1
  
      if (index < 1) {
        return nGrams
      }
  
      while (index--) {
        nGrams[index] = value.slice(index, index + n)
      }
  
      return nGrams
    }
  }