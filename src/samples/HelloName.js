const HelloName = ({ children }) => (
  <h1>Hello, {children}!</h1>
);
render(
  <HelloName>
    Peter <h2>some nested stuff</h2>
  </HelloName>,
);
