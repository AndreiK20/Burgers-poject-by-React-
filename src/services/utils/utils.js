export async function checkResponse(result) {
    if (result.ok) {
      return await result.json();
    } else {
      throw new Error(`Ошибка: ${result.status}`);
    }
  }
  

  