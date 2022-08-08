import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AddGuestController } from "./modules/listPromoter/addGuests/AddGuestController";
import { CreateListPromoterController } from "./modules/listPromoter/createListPromoter/CreateListPromoterController";
import { DeleteListController } from "./modules/listPromoter/deleteList/DeleteListController";
import { GetListPromotersController } from "./modules/listPromoter/getListPromoters/GetListPromotersController";
import { CreatePartyController } from "./modules/party/createParty/CreatePartyController";
import { DeletePartyController } from "./modules/party/deleteParty/DeletePartyController";
import { GetPartiesController } from "./modules/party/getParties/GetPartiesController";
import { UpdatePartyController } from "./modules/party/updateParty/UpdatePartyController";
import { AuthenticateUserController } from "./modules/user/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { GuestsFromAListController } from "./modules/listPromoter/guestsFromAList/GuestsFromAListController"
import { ListsFromAPartyController } from "./modules/party/listsFromAParty/ListsFromAPartyController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createPartyController = new CreatePartyController()
const deletePartyController = new DeletePartyController()
const getPartiesController = new GetPartiesController()
const updatePartyController = new UpdatePartyController()
const createListPromoterController = new CreateListPromoterController()
const getListPromotersController = new GetListPromotersController()
const deleteListController = new DeleteListController()
const addGuestController = new AddGuestController()
const guestsFromAListController = new GuestsFromAListController()
const listsFromAPartyController = new ListsFromAPartyController()

// User
routes.post("/user", createUserController.handle)
routes.post("/authenticate", authenticateUserController.handle)

// Party
routes.post("/party", createPartyController.handle)
routes.delete("/party/:id", ensureAuthenticated, deletePartyController.handle)
routes.get("/parties", getPartiesController.handle)
routes.put("/party/:id", ensureAuthenticated, updatePartyController.handle)
routes.get("/listsFromAParty/:id_party", listsFromAPartyController.handle)

// ListPromoter
routes.post("/listPromoter/:id_party", ensureAuthenticated, createListPromoterController.handle)
routes.get("/listPromoters", getListPromotersController.handle)
routes.delete("/listPromoter/:id", deleteListController.handle)
routes.put("/listPromoter/addGuest/:id_listPromoter", ensureAuthenticated, addGuestController.handle)
routes.get("/guestsFromAList/:id_listPromoter", guestsFromAListController.handle)

export { routes }