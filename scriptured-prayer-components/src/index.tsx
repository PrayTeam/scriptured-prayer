import React from 'react';
import { createInjectableComponent } from '~/utils';

interface IndexProps {
  name: string;
}

createInjectableComponent(function(props: IndexProps) {
  return (
    <div className="py-2">
      Hello, {props.name ?? 'world'}!
    </div>
  );
});
