function validatePIN(pin) {
  var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6)
  return isNumber
  }