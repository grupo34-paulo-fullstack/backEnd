import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

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

  @Column({})
  birthdate: Date;

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
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column()
  is_announcer: boolean;

  @Column()
  password: string;

  //   @OneToMany(() => Comment, (comment) => comment.user, { eager: true })
  //   comments: Comment[];

  //   @OneToMany(() => Announcement, (announcement) => announcement.user, { eager: true })
  //   announcements: Announcement[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
