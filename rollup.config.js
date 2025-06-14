import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
  replace({
    preventAssignment: true,
    __BASE__: JSON.stringify('/Svelte-Project')
  }),

  svelte({
    preprocess: sveltePreprocess({ sourceMap: !production }),
    compilerOptions: {
      dev: !production
    }
  }),

  css({ output: 'bundle.css' }),

  resolve({
    browser: true,
    dedupe: ['svelte']
  }),

  commonjs(),

  typescript({
    sourceMap: !production,
    inlineSources: !production
  }),

  production && terser()
],
	watch: {
		clearScreen: false
	}
};
