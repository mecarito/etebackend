import { Test, TestingModule } from '@nestjs/testing';
import { StaffinfoService } from './staffinfo.service';

describe('StaffinfoService', () => {
  let service: StaffinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffinfoService],
    }).compile();

    service = module.get<StaffinfoService>(StaffinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
