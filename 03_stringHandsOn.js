function stringHandsOn(){
   var sentence ="   Hey you are doing good, keep it up   ";

   console.log(`----------------------------Step 1-----------------------`);
   console.log(`Given string is: ${sentence}`);

   console.log(`----------------------------Step 2-----------------------`);
   var sentenceLength = sentence.length;
   console.log(`Length of given string is: ${sentenceLength}`);

   console.log(`----------------------------Step 3-----------------------`);
   var sentenceTrim = sentence.trim();
   var sentenceTrimLength = sentenceTrim.length;
   console.log(`String after trim is: ${sentenceTrim} and it's length is: ${sentenceTrimLength}`);

   console.log(`----------------------------Step 4-----------------------`);
   console.log(`Total number of spaces removed in step 3 are: ${sentence.length - sentenceTrimLength}`);

   console.log(`----------------------------Step 5-----------------------`);
   var firstChar = sentenceTrim.charAt(0);
   var lastChar = sentenceTrim.charAt(sentenceTrim.length - 1);
   console.log(`After trim first character is: "${firstChar}" and last character is: "${lastChar}" `);

   console.log(`----------------------------Step 6-----------------------`);
   var words = sentenceTrim.split(" ")
   console.log(words);
   console.log(`Total words after Trim are: ${words.length}`);

   console.log(`----------------------------Step 7-----------------------`);
   var stringIndex = sentenceTrim.indexOf(`good`);
   console.log(`Index of substring "good" is: ${stringIndex}`);

   console.log(`----------------------------Step 8-----------------------`);
   var substring = sentenceTrim.substr(22,);
   console.log(`Substring starting from index 22 is: ${substring}`);

   console.log(`----------------------------Step 9-----------------------`);
   var stringEnd = sentenceTrim.endsWith(`up`);
   console.log(`Does the trimmed string end with word "up": ${stringEnd}`);
   
   console.log(`----------------------------Step 10-----------------------`);
   var stringStart = sentenceTrim.startsWith(`Hey`);
   console.log(`Does the trimmed string start with word "Hey": ${stringStart}`);
}
stringHandsOn();