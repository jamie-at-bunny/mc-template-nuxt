const greetings: Record<string, string> = {
  US: 'Howdy',
  GB: 'Hello',
  FR: 'Bonjour',
  DE: 'Hallo',
  ES: 'Hola',
  IT: 'Ciao',
  JP: 'こんにちは',
  SI: 'Živjo',
  NL: 'Hallo',
  SE: 'Hej',
}

export default defineEventHandler((event) => {
  const country = getHeader(event, 'cdn-requestcountrycode')?.toUpperCase()
  const greeting = (country && greetings[country]) || 'Hello'
  return { country: country ?? null, greeting }
})
