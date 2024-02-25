import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TranzactionsService } from './tranzactions.service';
import { CreateTranzactionDto } from './dto/create-tranzaction.dto';
import { UpdateTranzactionDto } from './dto/update-tranzaction.dto';

@Controller('tranzactions')
export class TranzactionsController {
  constructor(private readonly tranzactionsService: TranzactionsService) {}

  @Post()
  create(@Body() createTranzactionDto: CreateTranzactionDto) {
    return this.tranzactionsService.create(createTranzactionDto);
  }

  @Get()
  findAll() {
    return this.tranzactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tranzactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTranzactionDto: UpdateTranzactionDto) {
    return this.tranzactionsService.update(+id, updateTranzactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tranzactionsService.remove(+id);
  }
}
