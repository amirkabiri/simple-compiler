function scanner(input){
  const tokens = []
  let i = 0;
  const isDigit = chr => /^[0-9]$/.test(chr)

  while(i < input.length){
    const chr = input[i]

    if(["\n", " "].includes(chr)) {
      i ++
      continue
    }

    if(['(', ')'].includes(chr)){
      tokens.push({
        type: 'par',
        value: chr
      })
      i ++
      continue
    }

    if(['+', '-', '*', '/'].includes(chr)){
      tokens.push({
        type: 'operator',
        value: chr
      })
      i ++
      continue
    }

    if(isDigit(chr)){
      let accumulator = chr
      let j = i + 1

      while(isDigit(input[j]) || input[j] === '.'){
        accumulator += input[j]
        j ++
      }

      tokens.push({
        type: 'number',
        value: accumulator
      })
      i = j
      continue
    }

    throw new Error(`character ${ chr } is unsupported at index ${ i }`)
  }

  return tokens
}
