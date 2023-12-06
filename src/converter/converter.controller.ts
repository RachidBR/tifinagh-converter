import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('converter')
@ApiTags('Controller')
export class ConverterController {
  constructor(private readonly converterService: ConverterService) {}

  @Get('tifinagh-to-latin/:text')
  @ApiOperation({
    summary: 'Tifinagh to Latin',
    description: 'Converts words in tifinagh to latin',
  })
  tifinaghToLatin(@Param('text') text: string) {
    const convertedText = this.converterService.convertTifinaghToLatin(text);
    return { result: convertedText };
  }

  @Get('latin-to-tifinagh/:text')
  @ApiOperation({
    summary: 'Latin to Tifinagh',
    description: 'Converts words in latin to tifinagh',
  })
  latinToTifinagh(@Param('text') text: string) {
    const convertedText = this.converterService.convertLatinToTifinagh(text);
    return { result: convertedText };
  }
}
