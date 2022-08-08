import { Pop } from "../Utils/Pop.js";
import { imageService } from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";


function _drawImage() {
    console.log(ProxyState.image);
}

export class ImageController {
    constructor() {
        this.getImage()
        ProxyState.on('image', _drawImage)

    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.log('[getImage]', error);
            Pop.error(error)
        }
    }
} 