import { Gallery } from "../../entities/gallery.entities";

export interface IAnnouncement {
    readonly id: string;
    title: string;
    year: string;
    km: string;
    price: number;
    description: string;
    readonly createdAt: Date;
    type_vehicle: string;
    image: string;
    is_active: boolean;
    readonly user_id: string;
    gallery?: Gallery[]
}

export interface IAnnouncementUpdate {
    announcement_id: string;
    title?: string;
    year?: string;
    km?: string;
    price?: number;
    description?: string;
    type_vehicle?: string;
    image?: string;
    is_active?: boolean;
    gallery?: Gallery[]
}