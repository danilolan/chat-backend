const alpha = 'abcdefghijklmnopqrstuvwxyz'

export default function genRoomName (rooms : string[], length?: number) : string {
  let nameIsValid : boolean = false
  let name : string = ''

  while (!nameIsValid) {
    name = genName(length)
    nameIsValid = verifyNames(name, rooms)
  }
  return name
}

function verifyNames (name: string, array : string[]) : boolean {
  for (let i; i < array.length; i++) {
    if (name === array[i]) return false
  }
  return true
}

function genName (length : number) : string {
  let name = ''
  const quantity = length || 4
  for (let i = 0; i < quantity; i++) {
    name += getRandomLetter()
  }
  return name
}

function getRandomLetter () : string {
  return alpha[getRandomArb(0, 24)]
}

function getRandomArb (min : number, max : number) : number {
  min = Math.ceil(min)
  max = Math.floor(max)
  const number = Math.floor(Math.random() * (max - min)) + min
  return number
}
