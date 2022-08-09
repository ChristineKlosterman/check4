import { ProxyState } from "../AppState.js";
// import { Author } from "../Models/Author.js";
import { Quotes } from "../Models/Quotes.js";
import { sandboxApi } from "./AxiosService.js";

class QuotesService {
    async getQuote() {
        let res = await sandboxApi.get('/quotes')

        ProxyState.quote = new Quotes(res.data)

    }
    // async getAuthor() {

    //     let res = await sandboxApi.get('/quotes')

    //    ProxyState.author = new Author(res.data)

    // }

}



export const quoteService = new QuotesService()