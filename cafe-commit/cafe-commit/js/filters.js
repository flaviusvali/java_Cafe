// Här ska filtreringen och sorteringen in.
// getVisibleItems() bestämmer VILKA rätter som visas – och i vilken ORDNING.
function getVisibleItems() {
  // En kopia av menyn, så att originalet aldrig ändras
  let items = [...menu];

  return items;
}

// Anropa updateMenu() varje gång ett filter ändras
function updateMenu() {
  const items = getVisibleItems();
  renderMenu(items);
}
