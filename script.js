export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === 'e') {
      result.push ("")
    } else if (currentElement === 'E') {
      result.push ("")
    } else {
      result.push(currentElement)
    }
    
  }
  return result.join("")
}


export function aufgabe02(args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    const uppercaseElement = currentElement.toUpperCase();
    result.push(uppercaseElement);
  }

  return result.join("");

}

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === 'e') {
      count = count + 1
    } else if (currentElement === 'E') {
      count = count + 1
    }

  }
  return count
}


export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === ' ') {
      count = count + 1
    }

  }
  return count
}

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === 'e') {
      result.push ("3")
    } else {
      result.push(currentElement)
    }

  }
  return result.join("")
}


export function aufgabe05(args) {
  const input = args
  let uppercaseCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === '.') {

    } else if (currentElement === '') {

    } else if (currentElement === currentElement.toUpperCase()) {
      uppercaseCount++
    }
  }

  if (uppercaseCount > 0) {

  return true

} else {

   return false

}

}


export function aufgabe12 (args) {
  const input = args
  const result = []

  let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    pos = pos + 1
    if (currentElement === "e") {
      return pos
    }
    
  }
  
  return -1
}
