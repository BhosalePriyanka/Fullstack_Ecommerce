import pluginRewriteAll from 'vite-plugin-rewrite-all'; // ignore dots from link sent to reset password user to avoid interuption

export default {
  plugins: [pluginRewriteAll()]
}