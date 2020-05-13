import { Test, TestingModule } from '@nestjs/testing';
import { StaffinfoController } from './staffinfo.controller';

describe('Staffinfo Controller', () => {
  let controller: StaffinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffinfoController],
    }).compile();

    controller = module.get<StaffinfoController>(StaffinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
