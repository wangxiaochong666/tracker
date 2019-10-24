import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tracker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  page: string;

  @Column('text')
  event: string;

  @Column()
  ip: string;

  // 平台
  // 系统
  // ip
  // 页面
  // 事件
}