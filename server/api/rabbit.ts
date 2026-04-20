const breeds = [
  'Holland Lop',
  'Netherland Dwarf',
  'Mini Rex',
  'Lionhead',
  'Flemish Giant',
  'English Angora',
  'Dutch',
  'Himalayan',
  'Rex',
  'Harlequin',
]

export default defineEventHandler(() => {
  return { breed: breeds[Math.floor(Math.random() * breeds.length)] }
})
