
import type { ResponseBody } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import { initContentful, getPageContent, getEntry } from '$utils/contentful';
import { C_SPACE, C_TOKEN, TEST } from "$env/static/private";

initContentful(C_SPACE, C_TOKEN, TEST);
export const load:PageServerLoad<ResponseBody> = async function _GET() {
    const response = await getPageContent('homepage');
    const fields = response.fields
    /* try for of loop instead */
    for (  const i in response.fields.featuredWorkExperience ){
        let workPlace = await getEntry(response.fields.featuredWorkExperience[+i].fields.workPlace.sys.id);
        response.fields.featuredWorkExperience[+i].fields.workPlaceName = workPlace.fields.name;
        response.fields.featuredWorkExperience[+i].fields.url = workPlace.fields.url || '/';
    }
    return {
    page: 'homepage',
    fields 
}
  }