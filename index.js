const { renderToString } = require('react-dom/server')

const renderJsx = require('./app.jsx.js')
const renderEsx = require('./app.esx.js')

console.log(`JSX: ${renderJsx()}`)
console.log(`ESX: ${renderEsx()}`)