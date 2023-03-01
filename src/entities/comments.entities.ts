import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
  } from "typeorm";
import { Announcement } from "./announcements.entities";
import { User } from "./users.entities";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Announcement, (announcement) => announcement.comments)
  announcement: Announcement;
}
