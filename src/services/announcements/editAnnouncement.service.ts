import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcements.entities";
import { AppError } from "../../errors/appError";
import { IAnnouncement } from "../../interfaces/announcements";


const editAnnouncementService = async (announcement: IAnnouncement): Promise<Announcement | null | undefined> => {

        const {id, image, model, year, km, price, is_active, gallery} = announcement;

        const announcementRepository = AppDataSource.getRepository(Announcement);

        const currentAnnouncement = await announcementRepository.findOneBy({id});

        if(currentAnnouncement) {
            const newAnnouncement = {
                id: id ? id : currentAnnouncement.id, 
                image: image ? image : currentAnnouncement.image, 
                model: model ? model : currentAnnouncement.model, 
                year: year ? year : currentAnnouncement.year, 
                km: km ? km : currentAnnouncement.km, 
                price: price ? price : currentAnnouncement.price, 
                createdAt: currentAnnouncement.createdAt,
                is_active: is_active ? is_active : currentAnnouncement.is_active, 
                user_id: currentAnnouncement.user.id, 
                gallery: gallery ? gallery : currentAnnouncement.gallery,
            };
            
            await announcementRepository.update(id ,newAnnouncement)
    
            const updatedAnnouncement = announcementRepository.findOneBy({id})
            
            return updatedAnnouncement
        }

        throw new AppError("Announcement not found", 404)
}

export default editAnnouncementService