import { Module } from '@nestjs/common';

import { TrackerModule } from './tracker.module';
import { TrackerController } from '../controllers/tracker.controller';
import { TrackerService } from '../services/tracker.service';

@Module({
  imports: [TrackerModule],
  controllers: [TrackerController],
  providers: [TrackerService],
})
export class AppModule {}
