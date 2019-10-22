const {
  renderToString
} = require('react-dom/server');

const React = require('react');

const {
  createStore
} = require('redux');

const {
  useSelector,
  Provider
} = require('react-redux');

const A = () => {
  const text = useSelector(state => state.text);
  return React.createElement("div", null, text);
};

module.exports = () => {
  const state = {
    text: 'hi'
  };
  const store = createStore((data = state) => data, state);
  return renderToString(React.createElement(Provider, {
    store: store
  }, React.createElement(A, null)));
};
