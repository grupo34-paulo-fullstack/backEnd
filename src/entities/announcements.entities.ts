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
import { v4 as uuid } from "uuid";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  km: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @CreateDateColumn({ default: new Date(), nullable: true })
  createdAt: Date;

  @Column()
  type_vehicle: string;

  @Column()
  image: string;

  @Column()
  is_active: boolean;

  @OneToMany(() => Gallery, (gallery) => gallery.announcement, {
    eager: true,
    onDelete: "CASCADE",
  })
  gallery: Gallery[];

  @OneToMany(() => Comment, (comment) => comment.announcement, { eager: true, nullable: true, onDelete: "CASCADE" })
  comments: Comment[]

  @ManyToOne(() => User, (user) => user.announcements, { nullable: false, onDelete: "CASCADE" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
