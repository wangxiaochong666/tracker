import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

import { TrackerRepository } from "../repositories/tracker.repository";
import { Tracker } from "../models/tracker.model";

const buffer = Buffer.alloc(0);

const defaultParams = {
  title: "首页",
  host: "www.mehost.cn",
  pid: "1",
  v: "0.1.0-build.20191011",
  cid: "1",
  chi: "",
  uid: "",
  sid: "",
  did: "",
  p: "M1",
  e: "ENTER",
  os: "",
  scr: "",
  pf: "",
};

@Service()
export class TrackerService {
  constructor(
    @InjectRepository(Tracker)
    private readonly trackerRepository: TrackerRepository
  ) {}

  async tracker(params) {
    const tracker = {};
    Object.assign(tracker, defaultParams, params || {});
    await this.trackerRepository.save(tracker);
    return buffer;
  }
}
