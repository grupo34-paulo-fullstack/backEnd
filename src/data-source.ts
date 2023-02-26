import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users.entities";
import { Comment } from "./entities/comments.entities";
import { Announcement } from "./entities/announcements.entities";
import { Gallery } from "./entities/gallery.entities";
import path from 'path'


const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: +process.env.PGPORT!,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: true,
  synchronize: true,
  entities: [User, Announcement, Gallery, Comment],
  migrations: [path.join(__dirname, "src/migrations/*.ts")],
});

export { AppDataSource };
