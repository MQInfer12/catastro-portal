import { http } from "../../config";

export const getRequest = async (route: string) => {
  try {
    const res = await fetch(http + route);
    const json = await res.json()
    return json;
  } catch (e) {
    console.log(e);
    return null;
  }
}