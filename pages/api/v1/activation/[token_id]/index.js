import { createRouter } from "next-connect";
import controller from "infra/controller";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  return response.status(200).json({});
}
