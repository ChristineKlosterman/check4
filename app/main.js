import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { TodoController } from "./Controllers/TodoController.js";

class App {

  weatherController = new WeatherController()

  quotesController = new QuoteController()

  imageController = new ImageController()

  clockController = new ClockController()

  todosController = new TodoController()

}

window["app"] = new App();
