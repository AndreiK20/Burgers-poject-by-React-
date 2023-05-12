import { config } from "../constans/constants";
import { checkResponse } from "../utils/utils";

export async function getIngredients() {
  const result = await fetch(`${config.baseUrl}/ingredients`, {
    method: "GET",
    headers: config.headers,
  });
  return await checkResponse(result);
}

export async function postNewOrder(ingredients) {
  const result = await fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(ingredients),
  });
  return await checkResponse(result);
}



