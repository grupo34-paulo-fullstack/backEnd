import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcements.entities";

@Entity("gallery")
export class Gallery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image: string;

  @ManyToOne(() => Announcement, (announcement) => announcement.gallery, {
    nullable: true,
    onDelete: "CASCADE",
  })
  announcement: Announcement;
}
