import { createRouter } from "next-connect";
import controller from "infra/controller";
import user from "model/user";

const router = createRouter();

router.get(getHendler);

export default router.handler(controller.errorHandlers);

async function getHendler(request, response) {
  const { username } = request.query;
  const userFound = await user.findOneByUsername(username);
  return response.status(200).json(userFound);
}
