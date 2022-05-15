module.exports = {
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Leetcode Algorithm Test Report"
    }]
  ]
}