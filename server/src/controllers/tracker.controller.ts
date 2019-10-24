import { Controller, Param, Get, ContentType, QueryParams } from "routing-controllers";
import { Service, Inject } from "typedi";
import { TrackerService } from "../services/tracker.service";

@Service()
@Controller()
export class TrackerController {
  @Inject()
  private trackerServices: TrackerService;

  @Get("/:id.gif")
  @ContentType("image/gif")
  picture(@QueryParams() params) {
    return this.trackerServices.tracker(params);
  }

  @Get("/:id")
  @ContentType("text/plain")
  text(@QueryParams() params) {
    return this.trackerServices.tracker(params);
  }
}
