import { Injectable, Inject } from "@nestjs/common";
import { Tracker } from "@/entities/tracker.entity";
import { Repository } from "typeorm";

@Injectable()
export class TrackerService {
  constructor(
    @Inject("PHOTO_REPOSITORY")
    private readonly trackerRepository: Repository<Tracker>
  ) {}

//   async save(): Promise<TrackerService[]> {
//     return await this.trackerRepository.find();
//   }
}
