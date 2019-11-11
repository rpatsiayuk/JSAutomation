'use strict'
class BasePage {
  constructor () {}

  getPageTitle () {
    return browser.getTitle()
  }
}

module.exports = BasePage
