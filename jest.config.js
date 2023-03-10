module.exports = {
  reporters: [
    "default",
    ["./node_modules/jest-html-reporters", {
      "pageTitle": "Leetcode Algorithm Test Report",
      "publicPath": "./__tests__/report",
      "expand": true
    }]
  ]
}
