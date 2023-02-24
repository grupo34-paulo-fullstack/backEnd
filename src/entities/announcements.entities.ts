import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Comment } from "./comments.entities";
import { Gallery } from "./gallery.entities";
import { User } from "./users.entities";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  km: string;

  @Column()
  price: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(() => Gallery, (gallery) => gallery.announcement, {
    eager: true,
    onDelete: "CASCADE",
  })
  gallery: Gallery[];

  @ManyToOne(() => User, (user) => user.announcements)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.announcement, {
    eager: true,
    onDelete: "CASCADE",
  })
  comments: Comment[];
}
