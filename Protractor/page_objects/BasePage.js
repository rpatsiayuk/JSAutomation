'use strict'
class BasePage {
  getPageTitle () {
    return browser.getTitle()
  }
}

module.exports = BasePage
