function Masked(actualWord,guessedWord){
    const actual=actualWord.toUpperCase();
   
    const guessed=new Set(guessedWord);
    console.log(guessed);
    
  const MaskedString=  actual.split('').map((item)=>{
    if(guessed.has(item)){
            console.log(item);
            return item
        }
        else{
            return "___ "
        }
    })
    console.log(MaskedString);

    return MaskedString;
}
export default Masked;