export const getInitials = function (string = '') {
  if (typeof string === 'string') {
    const matches = string.match(/\b\w/g) || []
    return (matches[0] || '').toUpperCase()
  } else {
    return ''
  }
}
