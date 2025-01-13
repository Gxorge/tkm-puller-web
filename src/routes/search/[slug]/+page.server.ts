import type { PageServerLoad } from './$types';
import { readFile } from 'fs/promises';
import { join } from 'path';
export const prerender = false

export const load: PageServerLoad = async ({ params }) => {
    try {
        // Construct the file path based on params
        const filePath = join('/mnt/share/ns1tkm/', `${params.slug}.json`);

        // Read the file asynchronously
        const jsonData = await readFile(filePath, 'utf-8');

        // Parse the JSON data
        const parsedData = JSON.parse(jsonData);

        return {
            json: parsedData
        };
    } catch (error) {
        console.error('Error reading JSON file:', error);

        return {
            error: 'Failed to load JSON data.'
        };
    }
};