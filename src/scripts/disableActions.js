export const disableActions = () => {
  const handleContextMenu = (e) => e.preventDefault();
  const handleCopy = (e) => e.preventDefault();
  const handleSelectStart = (e) => e.preventDefault();

  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('copy', handleCopy);
  document.addEventListener('selectstart', handleSelectStart);

  return () => {
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('copy', handleCopy);
    document.removeEventListener('selectstart', handleSelectStart);
  };
};
