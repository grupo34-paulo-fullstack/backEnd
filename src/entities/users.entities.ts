import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Announcement } from "./announcements.entities";
import { Exclude } from "class-transformer";
import { Comment } from "./comments.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column({ type: "date" })
  birthdate: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column({ nullable: true })
  complement: string;

  @Column()
  is_announcer: boolean;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

    @OneToMany(() => Announcement, (announcement) => announcement.user)
    announcements: Announcement[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
