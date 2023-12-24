function insertComponent(Component) {
  const roots = document.currentScript.getAttribute('root').split(',');
  roots.forEach(rootId => {
    const el = document.getElementById(rootId);
    ReactDOM.createRoot(el).render(React.createElement(Component, { ...el.dataset }));
    // clean up data-set attributes
    Object.keys(el.dataset).forEach(dataKey => delete el.dataset[dataKey]);
  });
}
