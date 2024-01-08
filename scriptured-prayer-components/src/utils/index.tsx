import React from 'react';
import ReactDOM from 'react-dom/client';

export function createInjectableComponent(component: React.FC<any>) {
  const roots = document.currentScript!.getAttribute('root')!.split(',');
  roots.forEach(rootId => {
    const el = document.getElementById(rootId)!;
    ReactDOM.createRoot(el).render(React.createElement(component, { ...el.dataset }));
    // clean up data-set attributes
    Object.keys(el.dataset).forEach(dataKey => delete el.dataset[dataKey]);
  });
}
