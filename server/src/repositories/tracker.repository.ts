import { EntityRepository, Repository } from "typeorm";
import { Tracker } from "../models/tracker.model";
import { Service } from "typedi";

@Service()
@EntityRepository(Tracker)
export class TrackerRepository extends Repository<Tracker> {}
