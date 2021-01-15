function solver(node){
  if(node.type === 'number') return +node.value

  if(node.length === 1) return solver(node[0])

  if(node.length === 3){
    const a = solver(node[0])
    const b = solver(node[2])


    return eval(`a ${ node[1].value } b`)
  }

  throw new Error('what the hell man? you have syntax error')
}
