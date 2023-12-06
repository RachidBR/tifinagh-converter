export function convertMultiCharacterSequences(word: string): string {
    // Define multi-character sequences and their corresponding Tifinagh representations
    const sequences: Record<string, string> = {
      CH: 'ⵛ',
      Dd: 'ⴹ',
      Hh: 'ⵃ',
      Hn: 'ⵅ',
      Rr: 'ⵕ',
      Gh: 'ⵖ',
      Tt: 'ⵟ',
      Zh: 'ⵥ',

      // Add other sequences as needed
    };

    // Replace multi-character sequences in the word
    Object.entries(sequences).forEach(([sequence, tifinaghRepresentation]) => {
      const regex = new RegExp(sequence, 'g');
      word = word.replace(regex, tifinaghRepresentation);
    });

    return word;
  }