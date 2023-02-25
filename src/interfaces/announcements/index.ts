import { Gallery } from "../../entities/gallery.entities";

export interface IAnnouncement {
    readonly id: string;
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    readonly createdAt: Date;
    type_vehicle: string;
    image: string;
    is_active: boolean;
    user_id: string;
    gallery?: Gallery[]
}

export interface IAnnouncementUpdate {
    title?: string;
    year?: number;
    km?: number;
    price?: number;
    description?: string;
    type_vehicle?: string;
    image?: string;
    is_active?: boolean;
    gallery?: Gallery[]
}