// Font imports matching exactly https://github.com/chimeranext/website (src/layouts/Layout.astro)
import "@fontsource-variable/alegreya";
import "@fontsource-variable/piazzolla";
import "@fontsource/alegreya-sans/400.css";
import "@fontsource/alegreya-sans/700.css";
import "@fontsource-variable/inconsolata";

// Supplementary font imports from design spec
import "@fontsource/sora/600.css";
import "@fontsource/sora/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
