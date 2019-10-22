const esx = require('esx')();

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
  return esx`<div>${text}</div>`;
};

esx.register({
  Provider,
  A
});

module.exports = () => {
  const state = {
    text: 'hi'
  };
  const store = createStore((data = state) => data, state);
  return esx.renderToString`<Provider store=${store}><A /></Provider>`;
};
