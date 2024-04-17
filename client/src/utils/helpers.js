// function to pluralize items 
export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + "s";
}

// function to randomly shuffle an array
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to select 20 random items from the shuffled list
export function selectRandomItems(items) {
  const keys = Object.keys(items);
  const shuffledKeys = shuffleArray(keys);
  const selectedItems = {};
  for (let i = 0; i < Math.min(20, shuffledKeys.length); i++) {
    const key = shuffledKeys[i];
    selectedItems[key] = items[key];
  }
  return selectedItems;
}

