import { redirect } from "@remix-run/server-runtime";
import { fetchRecipes } from "~/data/recipe";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const params = Object.fromEntries(formData.entries()) as {
    redirectTo: string;
    ing: string;
  };

  await fetchRecipes(params.ing);
  return redirect(params.redirectTo);
};
