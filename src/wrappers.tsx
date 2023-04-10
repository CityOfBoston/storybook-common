import React from 'react';

type Children = React.ReactNode;

export function centerWrapper( props: { children: Children } ): JSX.Element {
  return (
    <div style={CENTER_STYLING}>
      { props.children }    
    </div>
  );
}

export function narrowWrapper( props: { children: Children } ): JSX.Element {
  return (
    <div style={NARROW_STYLING}>
      { props.children }    
    </div>
  );
}

const CENTER_STYLING = { margin: '2rem auto' };

const NARROW_STYLING = {
  maxWidth: '600px',
  ...CENTER_STYLING,
};
