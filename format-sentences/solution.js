function formatWords(words){
    if (words === null) return '';
    let cleanwords = words.length > 0 ? words.filter(ele => ele != '') : words;
    let last = '';
    if (cleanwords.length > 1) {
      last = ' and ' + cleanwords.pop();
    }
    return cleanwords.join(', ') + last;
  }