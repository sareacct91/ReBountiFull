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
  const shuffledItems = shuffleArray(items);
  return shuffledItems.slice(0, 20);
}

