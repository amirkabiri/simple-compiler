function parser(tokens){
  if(tokens.length === 1 && tokens[0].type === 'number') return tokens[0]

  let par = 0
  for(let i = 0; i < tokens.length; i ++){
    const token = tokens[i]

    if(token.type === 'par') par += token.value === '(' ? 1 : -1
    if(token.type === 'operator' && par === 0 && ['+', '-'].includes(token.value)){
      return [
        parser(tokens.slice(0, i)),
        token,
        parser(tokens.slice(i + 1))
      ]
    }
  }

  par = 0
  for(let i = 0; i < tokens.length; i ++){
    const token = tokens[i]

    if(token.type === 'par') par += token.value === '(' ? 1 : -1
    if(token.type === 'operator' && par === 0 && ['*', '/'].includes(token.value)){
      return [
        parser(tokens.slice(0, i)),
        token,
        parser(tokens.slice(i + 1))
      ]
    }
  }

  for(let i = tokens.length - 1; i > 0 ; i --){
    if(tokens[i].type !== 'par' || tokens[i].value !== ')') continue

    return [
      tokens.slice(1, i),
      tokens.slice(i + 1)
    ].filter(item => Array.isArray(item) && item.length).map(item => parser(item))
  }

  throw new Error('I dont know where, but you have syntax error :)')
}
