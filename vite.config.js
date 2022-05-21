/* eslint-disable no-mixed-spaces-and-tabs */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/MeguChat/',
	server: {
	  host: true
	},
	build: {
		chunkSizeWarningLimit: 1600,
	},
	
})