import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"


class ImageService {
    async getImage() {
        let res = await sandboxApi.get('/images')
        console.log('image res', res.data.largeImgUrl);
        ProxyState.image = res.data.largeImgUrl
        document.body.style.backgroundImage = `url(${res.data.largeImgUrl})`



    }
}

export const imageService = new ImageService()