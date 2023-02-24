import { Announcement } from "@mui/icons-material"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/appError"



const deleteAnnouncementService = async (id: string) => {

    const announcementRepository = AppDataSource.getRepository(Announcement)

    const getAnnouncement = await announcementRepository.findOneBy({id})

    if(getAnnouncement) {
        await announcementRepository.delete({id})
    }

    throw new AppError("Announcement not found", 404)
}

export default deleteAnnouncementService