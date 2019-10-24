import { Controller, Get, Param, Request, Header, Head, All, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class TrackerController {
    @Get("picture/:id")
    @Header("Content-Type", "image/gif")
    public async picture(@Res() res: Response) {
        res.send(Buffer.alloc(0));
    }

    @Get("text/:id")
    @Header("Content-Type", "text/plain")
    public async text() {
        return '';
    }
}
