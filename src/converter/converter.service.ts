import { Injectable } from '@nestjs/common';
import { tifinaghToLatinMapping } from './tifinagh-to-latin.map';
import { shouldConvertStoZ } from './utils/sound-conditions.utils';
import { latinToTifinaghMapping } from './latin-to-tifinagh.map';
import { convertMultiCharacterSequences } from './utils/multi-sequence.utils';

@Injectable()
export class ConverterService {
  convertTifinaghToLatin(text: string): string {
    return text
      .split('')
      .map((char) => tifinaghToLatinMapping[char] || char)
      .join('');
  }

  convertLatinToTifinagh(text: string): string {
    const upperCaseText = text.toUpperCase();

    // Split the text into words
    const words = upperCaseText.split(/\s+/);

    // Convert each word
    const convertedWords = words.map((word, index, array) => {
      // Check if 's' is inside a word and convert it to 'ⵣ'
      if (shouldConvertStoZ(array, index)) {
        return 'ⵣ';
      }

      // Convert multi-character sequences
      const convertedSequence = convertMultiCharacterSequences(word);

      // Convert each letter in the word
      const convertedLetters = convertedSequence
        .split('')
        .map((char) => latinToTifinaghMapping[char] || char)
        .join('');

      return convertedLetters;
    });

    // Join the converted words
    return convertedWords.join(' ');
  }

  
}
