// hardcoded por hora. Deve ser requisitado do usuario
let input: string = 'A verdade vos libertará logo'

//O input, que era uma unica longa string, se torna uma array, onde em cada index existe uma palavra
// é um trabalho que está sendo feito separadamente por legibilidade
let phrases = input.split(' ')

// o valor deve ser o index do primeiro elemento do segundo grupo (regras do método splice())
let razorIndex = 3
/**
 * Transforma uma array de palavras em uma array de arrays de palavras
 * ex: ['the','cow','is','conscious'], with the razor bisecting at 2, results in
 * [['the','cow'],['is','conscious']]
 * @param phraseArr 
 * @param razorPosition 
 * @returns 
 */
function bisect(phraseArr:Array<any>, razorPosition:number):Array<any>{
  let tmpArray:Array<any> = [...phraseArr]
  let rightSide:Array<string> = tmpArray.splice(razorPosition, tmpArray.length - razorPosition)
  let leftSide:Array<string> = [...tmpArray]
  phraseArr.splice(0, -1, [leftSide, rightSide])
  return phraseArr
}

console.log(bisect(phrases, razorIndex))












function buildOrSplit(phrase:string | Array<any>): string | Array<any> {
  let product: string | Array<any>
  if (typeof phrase == 'string') {
    product = phrase.split(' ')
  } else if (Array.isArray(phrase)){

  }
  return product
}