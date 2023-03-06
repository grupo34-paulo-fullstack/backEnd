import { AppDataSource } from "../../data-source"
import { Announcement } from "../../entities/announcements.entities"
import { AppError } from "../../errors/appError"

const deleteAnnouncementService = async (id: string) => {

    const announcementRepository = AppDataSource.getRepository(Announcement)

    const getAnnouncement = await announcementRepository.findOneBy({id})

    if(!getAnnouncement) {
        throw new AppError("Anúncio não encontrado", 404)
    }
    
    await announcementRepository.delete({id})

    return ""
}

export { deleteAnnouncementService }