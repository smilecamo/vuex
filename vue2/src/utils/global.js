function getComponent() {
  return require.context('../views', true, /\.vue$/);
}
