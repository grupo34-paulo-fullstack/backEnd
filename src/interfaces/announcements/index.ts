import { Gallery } from "../../entities/gallery.entities";

export interface IAnnouncement {
    readonly id: string;
    image: string;
    model: string;
    year: string;
    km: string;
    price: number;
    readonly createdAt: Date;
    is_active: boolean;
    readonly user_id: string;
    gallery?: Gallery[]
}