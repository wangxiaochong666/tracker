import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tracker" })
export class Tracker {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ comment: "Title" })
  private title: string;

  @Column({ comment: "Host" })
  private host: string;

  @Column({ comment: "Product ID" })
  private pid: string;

  @Column({ comment: "Product Version" })
  private v: string;

  @Column({ comment: "Client ID" })
  private cid: string;

  @Column({ comment: "Channel ID" })
  private chi: string;

  @Column({ comment: "User ID" })
  private uid: string;

  @Column({ comment: "Session ID" })
  private sid: string;

  @Column({ comment: "Device ID" })
  private did: string;

  @Column({ comment: "Page Code" })
  private p: string;

  @Column({ comment: "Event Code" })
  private e: string;

  @Column({ comment: "OS" })
  private os: string;

  @Column({ comment: "Screen" })
  private scr: string;

  @Column({ comment: "Platform" })
  private pf: string;
}
