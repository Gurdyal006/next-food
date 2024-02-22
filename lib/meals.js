import error from "@/app/meals/error";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new error("failed fetch meals........");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // console.log(slug, "slug----");
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
