export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn das aktuelle Zeichen "e" ist, hängt an die Liste an
    if (currentElement === 'e') {
      result.push ("")
    // Wenn das aktuelle Zeichen ein "E" ist, hänge nichts an die Liste an
    } else if (currentElement === 'E') {
      result.push ("")
    // Das aktuelle Zeichen ist weder eine "e" noch ein "E", hängt also das aktuelle Zeichen an
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
    const currentElement = input[i]

    // Wandle das aktuelle Element in einen Grossbuchstaben um
    const uppercaseElement = currentElement.toUpperCase()

    // Hänge den Grossbuchstaben an das Resultat an...
    result.push(uppercaseElement)
  }

  return result.join("")

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
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === ' ') {
      count = count + 1
    }

    }
  return count
}


export function aufgabe05(args) {
  const input = args;
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

      const asciiCode = currentElement.charCodeAt(0);
      if (
        (asciiCode >= 65 && asciiCode <= 90 )
      ) {
        return true
    }
  }
  
  return false
   
  }

  export function aufgabe06(args) {
    const input = args;
    const result = []
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i];
  
        const asciiCode = currentElement.charCodeAt(0);
        if (
          (asciiCode <= 31 || asciiCode >= 33 && asciiCode <= 64 
          || asciiCode >= 91 && asciiCode <= 96 || asciiCode >= 123 )
        ) {
          return true
      }
    }
    
    return false
     
    }


    export function aufgabe07(args) {
      const input = args
      const result = []
    
      for (let i = 0; i < input.length - 2; i++) {
        const currentElement = input[i]
    
        if (input[i] === 'u' && input[i + 1] === 'n' && input[i + 2] === 'd') {
          return true
        }
      }
      return false
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
    

    export function aufgabe09(args) {
      const input = args
      const result = []
      let len = 0
    
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
    
        len = len + 1
        
      }
      if (len === 6) {
        return true }
        else {return false}
      }


    export function aufgabe10(args) {
      const input = args
     
      if (input.length !== 7) return false
      if (input[0] !== "#") return false
     
      for (let i = 1; i < input.length; i++) {
        const currentElement = input[i];
        const ascii = currentElement.charCodeAt(0);
     
        if (48 <= ascii && ascii <= 57) {
       
        } else if (65 <= ascii && ascii <= 70) {
         
        } else {
       
          return false
        }
      }
      return true
    }


  export function aufgabe11(args) {
    const input = args
    const result = []
    let ascii = -1
   
    if (input.length > 1){
      return null
    }
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      ascii = currentElement.charCodeAt(0)
      return ascii
    }
    return null
  }


export function aufgabe12 (args) {
  const input = args
  const result = []
  let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    pos = pos + 2
    if (currentElement === "e") {
      return i
    }
    
  }
  
  return -1
}

export function aufgabe13(args) {
  const input = args
  const result = []
 
let positionOfLastE = -1
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if (currentElement === "e") {
      positionOfLastE = i
    }
  }
 
  return positionOfLastE
}


export function aufgabe14(args) {
  const input = args
  let count = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement === "e") {
      count = count + 1
 
      if (count === 3) {
        return i
      }
    }
  }
 
  return -1
}

export function aufgabe15(args) {
  const input = args;
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

    // Unterbricht die Schleife, wenn ein Leerzeichen auftritt
    if (currentElement === " ") {
      break;
    }

    // Hängt das aktuelle Zeichen an das Ergebnis an
    result.push(currentElement);
  }

  // Verbindet die Zeichen im Ergebnis und gibt die Zeichenfolge zurück
  return result.join('');
}

export function aufgabe16(args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe17(args) {
  const input = args;
  const result = input.split(',')

  // Bubble Sort zum Sortieren der Elemente der Liste
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        // Tauscht die Elemente aus, wenn sie in der falschen Reihenfolge sind
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
  }

  return result.join(',')
}

export function aufgabe27(args) {
  const input = args;
  const result = []

  if (input.length === 0) return false;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

      const asciiCode = currentElement.charCodeAt(0);
      if (
        (asciiCode < 48 || asciiCode > 57 )
      ) {
        return false
    }
  }
  
  return true
   
  }
