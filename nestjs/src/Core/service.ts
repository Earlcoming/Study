import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CoreService {
  getCore(): string {
    return `<p style="color: red">get core</p>`
  }
  getAllCore(): string {
    return `<p style="color: blue">get All core</p>`
  }
}
