import type { PageLoad } from './$types'
export const prerender = false

export const load: PageLoad = async ({ parent, data }) => {
    await parent()
        let { code, error } = data
        return {
            code,
            error
        }
}