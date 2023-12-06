
export const shouldConvertStoZ = (text: string[], index: number): boolean => {
  // Check if 's' is inside a word and convert it to 'ⵣ' if between two vowels
  const currentChar = text[index];
  const previousChar = text[index - 1];
  const nextChar = text[index + 1];

  return (
    currentChar === 's' &&
    index > 0 &&
    index < text.length - 1 &&
    isVowel(previousChar) &&
    isVowel(nextChar)
  );
};

const isVowel = (char: string): boolean => {
  // Define the vowels in your context
  const vowels = ['A', 'E', 'I', 'O', 'U'];

  return vowels.includes(char.toUpperCase());
};
const isSeparator = (char: string): boolean => {
  // Define your word separators (e.g., spaces, punctuation)
  const separators = [' ', ',', '.', ';', ':', '?', '!', '-', '_'];
  return separators.includes(char);
};