function findMatching (drivers, name) {
  return drivers.filter(function(driver) {
    retun driver.toLowerCase() === name.toLowerCase();
  })
}