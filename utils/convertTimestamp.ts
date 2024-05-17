const convertTimestamp = (timestamp: number) => {
  const unix = new Date(timestamp * 1000)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const fullYear = unix.getFullYear()
  const month = unix.getMonth() + 1
  const date = unix.getDate()
  const day = days[unix.getDay()]
  const hours = unix.getHours()
  const minutes = unix.getMinutes() < 10 ? '0' + unix.getMinutes() : unix.getMinutes()
  const seconds = unix.getSeconds() < 10 ? '0' + unix.getSeconds() : unix.getSeconds()

  return {
    fullYear,
    month,
    day: date,
    weekday: day,
    hours,
    minutes,
    seconds,
    date: `${fullYear}-${month}-${date}`,
    time: `${hours}:${minutes}`
  }
}
export default convertTimestamp
