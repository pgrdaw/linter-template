import { defineConfig } from 'vite'
import eslint from '@rollup/plugin-eslint'

export default defineConfig({
    plugins: [
        eslint({
            exclude: [/.css/, /.svg/]
        })
    ]
})
