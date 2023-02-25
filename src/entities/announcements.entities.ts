import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Gallery } from "./gallery.entities";
import { User } from "./users.entities";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;
  
  @Column()
  year: string;
  
  @Column()
  km: string;
  
  @Column()
  price: number;

  @Column()
  description: string;
  
  @CreateDateColumn({default: new Date(), nullable: true})
  createdAt: Date;

  @Column()
  type_vehicle: string;
  
  @Column()
  image: string;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(() => Gallery, (gallery) => gallery.announcement, {
    eager: true,
    onDelete: "CASCADE",
  })
  gallery: Gallery[];

  @ManyToOne(() => User, (user) => user.announcements)
  user: User;
}
