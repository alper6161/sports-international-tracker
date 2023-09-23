import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {copy} from 'vite-plugin-copy';

export default defineConfig({
    plugins: [
        react(),
        copy({
            targets: [
                {src: 'assets/files/*.xlsx', dest: 'dist'},
            ],
            verbose: true,
        }),
    ],
})
