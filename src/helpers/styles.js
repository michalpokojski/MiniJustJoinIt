export const tranctuate = {
  maxWidth: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}

export const getMapPinOpacity = (isAnySelected, isSelected) => {
  switch (true) {
    case isAnySelected && isSelected:
      return 1
    case isAnySelected && !isSelected:
      return 0.1
    default:
      return 1
  }
}
