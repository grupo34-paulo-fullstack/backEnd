import { Gallery } from "../../entities/gallery.entities";

export interface IAnnouncement {
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    type_vehicle: string;
    image: string;
    is_active: boolean;
    gallery: Gallery[]
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