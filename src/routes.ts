import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreatePartyController } from "./modules/party/createParty/CreatePartyController";
import { DeletePartyController } from "./modules/party/deleteParty/DeletePartyController";
import { GetPartiesController } from "./modules/party/getParties/GetPartiesController";
import { UpdatePartyController } from "./modules/party/updateParty/UpdatePartyController";
import { AuthenticateUserController } from "./modules/user/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createPartyController = new CreatePartyController()
const deletePartyController = new DeletePartyController()
const getPartiesController = new GetPartiesController()
const updatePartyController = new UpdatePartyController()

// User
routes.post("/user", createUserController.handle)
routes.post("/authenticate", authenticateUserController.handle)

// Party
routes.post("/party", createPartyController.handle)
routes.delete("/party/:id", ensureAuthenticated, deletePartyController.handle)
routes.get("/parties", getPartiesController.handle)
routes.put("/party/:id", ensureAuthenticated, updatePartyController.handle)


// ListPromoter

export { routes }