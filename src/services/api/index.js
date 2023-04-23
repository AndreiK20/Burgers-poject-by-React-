import { config } from "../constans/constants";
import { checkResponse } from "../utils/utils";

export async function getRequest() {
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

/* 
// Эндпоинт
// POST https://norma.nomoreparties.space/api/orders

// Тело запроса
{ 
  "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
} */
