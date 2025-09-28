const ourNames: string[] = ['Newton', 'Jillian', 'Neji']

function arrayChecker(name: string): boolean {
  return ourNames.includes(name)
}

arrayChecker('James')

let nameToCheck = 'jane'

if(arrayChecker(nameToCheck)) {
  console.log(`${nameToCheck} is in the array`)
} else {
  console.log(`${nameToCheck} is not in the array`)
}