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
    // Soll nur ein 'e' enthalten
    if (currentElement === 'e') {
      count = count + 1

    // Soll grosses 'E' zählen
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
    // überprüfe ob das aktuelle Element ein leerzeichen ist
    if (currentElement === ' ') {
      count = count + 1
    }

    }
  return count
}


export function aufgabe05(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Sollte einen Grossbuchstaben erkennen mit dem Ascii code
      const asciiCode = currentElement.charCodeAt(0)
      if (
        (asciiCode >= 65 && asciiCode <= 90 )
      ) {
        return true
    }
  }
  
  return false
   
  }

  export function aufgabe06(args) {
    const input = args
    const result = []
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // Sollte einen Sonderzeichen erkennen mit dem Ascii code
        const asciiCode = currentElement.charCodeAt(0)
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
        // Sollte ein "und" erkennen
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
        // prüft ob das aktuelle Element ein 'e' ist
        if (currentElement === 'e') {
          // wenn ja, dann erstezte dies mit einem "3"
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
      // prüft ob das aktuelle Element 6 Zeichen lang ist
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
   // wenn das aktuelle Element kleiner als 1 ist antworte null
    if (input.length > 1){
      return null
    }
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // findet den ascii code des aktuellen Elelements
      ascii = currentElement.charCodeAt(0)
      // gibt den herausgefundenen ascii Wert an
      return ascii
    }
    return null
  }


export function aufgabe12 (args) {
  const input = args


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
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
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Unterbricht die Schleife, wenn ein Leerzeichen auftritt
    if (currentElement === " ") {
      break;
    }

    // Hängt das aktuelle Zeichen an das Ergebnis an
    result.push(currentElement)
  }

  // Verbindet die Zeichen im Ergebnis und gibt die Zeichenfolge zurück
  return result.join('')
}

export function aufgabe16(args) {
  const input = args //Für diese Aufgabe habe ich AI benutzt. Der prompt ist: Schreiben Sie eine Javascript-Funktion, die Eingaben bis zum Zeichen „$“ als ersten Teil einer Liste liest, der Rest als zweiter Teil.
  const result = []
  const dollarZeichen = '$'
  const currentElement = input.indexOf(dollarZeichen)

  if (currentElement === -1) {
    return result.join("")}

const ersterTeil = input.substring(0, currentElement)
const zweiterTeil = input.substring(currentElement + 1)

return [ersterTeil, zweiterTeil]
}

// Aufgabe mit AI gemacht. Prompt: Schreibe eine javascript Funktion die, die Eingabe liesst als Liste ein, Einträge in der Liste werden von einem ',' getrennt.
export function aufgabe17(args) {
  const input = args.split(',') // Teilt die Eingabe durch Kommas auf
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].trim() // Schneidet Leerzeichen um jedes Element herum ab. (Hier habe ich gegoogelt, damit ich ".trim" herausfinde)
    result.push(currentElement)
  }

  return result.join(", ") // Verbindet verarbeitete Elemente mit Kommas und gibt sie zurück
}


export function aufgabe18(args) {
  const input = args
  const result = []
  let name = ""
  let alter = ""

  for (let i = 0; i < input.length; i++) {
    const currentCharCode = input.charCodeAt(i)

    // Prüft, ob das Zeichen ein Buchstabe ist
    if ((currentCharCode >= 65 && currentCharCode <= 90) || (currentCharCode >= 97 && currentCharCode <= 122)) {
      name += input[i]
    }
    // Prüft, ob das Zeichen eine Ziffer ist
    else if (currentCharCode >= 48 && currentCharCode <= 57) {
      alter += input[i]
    }
  }

  if (name) {
    result.push("Sie heissen " + name)
  }

  if (alter) {
    result.push(" und sind " + alter + " Jahre alt")
  }

  return result.join("")
}

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Füge jedes Zeichen zweimal hinzu
    result.push(currentElement, currentElement)
    
  }
  
  return result.join("")
}

export function aufgabe20 (args) {
  const input = args
  const result = []
 
  for(let i =0; i < input.length; i++) {
    const currentElement = input[i]

    // Überprüfung, ob das aktuelle Element ein Punkt ist.
    if (currentElement === ".") {
      // Überprüfung, ob das nächste Element nach dem Punkt ein Leerzeichen ist.
      if (input[i+1] === " ")  {
        return true
      }
 
    }
 
}
  return false
}


export function aufgabe21 (args) {
  const input = args
  const result = []
 
for (let i = input.length -1; i>=0; i--) {
  const currentElement = input[i]
  result.push(currentElement)//kehrt die Eingabe um.
 
}
  return result.join("")
}

export function aufgabe22(args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe23(args) {
  const input = args
  const result = []

  if (input.length === 0) {
    return '' // Soll leer zurückgeben
  }

  const ersterTeil = input.charAt(0)

  result.push(ersterTeil) // Soll erstes Zeichen am Anfang der Ausgabe anhängen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  result.push(ersterTeil) //Soll erstes Zeichen am Schluss der Ausgabe anhängen

  return result.join('')
}

export function aufgabe24(args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe25(args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe26(args) {
  const input = args
  const result = []
  
  return result.join("")
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

  export function aufgabe28(args) {
    const input = args
    const result = []
    
    return result.join("")
  }






  export function bubbleSort(args) {
    const input = args
    const list = input.split("") // Mit deisem Code wandlet man den Text um, somit wird das Element vertauscht

    for (let i = 0; i < list.length - 1; i++) { //Die Schleife durchläuft die Eingabeleiste
      const currentElement = list[i] // Das momentane Element in der Eingabeleiste
      const nextElement = list[i + 1] // Das folgende Element in der Eingabeleiste

      if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {// Die Elemente müssen vertauscht werden da die Reihenfolge nicht richtig ist
        const tmp = list[i + 1]
        list[i + 1] = list[i] //vertauschen der ELemente in der Eingabeleiste
        list[i] = tmp
        i = -1 //es fängt von vorne an
      }
    }
    const result = list.join("") //die sortierte Eingabeleiste wird wieder zu einem Text zusammengefügt
    console.log(result)

    
    return result // der sortierte Text wird zurückgegeben
  }
