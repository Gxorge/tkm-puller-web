import type { PageServerLoad } from './$types';
import { readFile } from 'fs/promises';
import { join } from 'path';
export const prerender = false

export const load: PageServerLoad = async ({ params }) => {
    try {
        // Construct the file path based on params
        //const filePath = join('/mnt/share/ns1tkm/', 'cf-0', params.dept, '-', params.price, '.txt');
        const filePath = join('/mnt/share/ns1tkm/', `cf-0${params.dept}-${params.price}.txt`);

        // Read the file asynchronously
        var parsedData = await readFile(filePath, 'utf-8');
        parsedData = parsedData.toString().replace(/['"]+/g, '');

        return {
            code: parsedData
        };
    } catch (error) {
        console.error('Error reading file:', error);

        return {
            error: 'Failed to load data.'
        };
    }
};