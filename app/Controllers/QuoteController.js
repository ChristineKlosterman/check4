import { Pop } from "../Utils/Pop.js";
import { quoteService } from "../Services/QuoteService.js";
import { ProxyState } from "../AppState.js";




function _drawQuotes() {
    console.log('quotes are drawing');
    //make template for quotes in HTML and make sure they're at the bottom

    document.getElementById('quotes').innerHTML = ProxyState.quote.quoteTemplate
}






export class QuoteController {
    constructor() {
        this.getQuote()
        ProxyState.on('quote', _drawQuotes)
        // ProxyState.on('author', _drawAuthor)
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            console.log('[getQuote]', error);
            Pop.error(error)
        }
    }

    async getAuthor() {
        try {
            await quoteService.getAuthor()
        } catch (error) {
            console.log('[get author]', error);
            Pop.error(error)
        }
    }


}