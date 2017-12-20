function high(x)
{
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var wordScores = [];
  var highScore = 0;
  var stringOut = "";
  x = x.toLowerCase();
  var xArray = x.split(" ");
  //console.log (xArray);

  for (var wordLoop = 0; wordLoop < xArray.length; wordLoop ++)
  {
    wordScores[wordLoop]=0;
    for (var lettersLoop = 0; lettersLoop < xArray[wordLoop].length; lettersLoop++)
    {
      if(alphabet.indexOf(xArray[wordLoop][lettersLoop])!==-1)
        wordScores[wordLoop]+= alphabet.indexOf(xArray[wordLoop][lettersLoop])+1;
    }
  }
  for (var loop = 0; loop < xArray.length; loop ++)
    if (wordScores[loop]>highScore)
    {
      highScore = wordScores[loop];
      stringOut = xArray[loop];
    }
  return stringOut;
}