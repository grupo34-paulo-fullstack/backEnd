import { DataSource } from "typeorm";
import "dotenv/config";
import path from 'path'
import { User } from "./entities/users.entities";
import { Announcement } from "./entities/announcements.entities";
import { Gallery } from "./entities/gallery.entities";


const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: +process.env.PGPORT!,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: true,
  synchronize: true,
  entities: [User, Announcement, Gallery],
  migrations: [path.join(__dirname, "src/migrations/*.ts")],
});

export { AppDataSource };
