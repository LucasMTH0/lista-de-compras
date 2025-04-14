export function cutString(value: string, maxLength: number = 120){
  const cutString = value.slice(0, maxLength)
  return cutString + '...'
}
