const { renderToString } = require('react-dom/server')
const React = require('react')
const { createStore } = require('redux')
const { useSelector, Provider } = require('react-redux')

const A = () => {
    const text = useSelector(state => state.text)
    return <div>{text}</div>
}

module.exports = () => {
    const state = { text: 'hi' };
    const store = createStore((data = state) => data, state);
    return renderToString(<Provider store={store}><A /></Provider>)
}