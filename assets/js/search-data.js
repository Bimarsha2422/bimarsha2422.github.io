// Fallback search data for when Jekyll build fails
// This file is normally generated from _scripts/search.liquid.js
// but is provided here as a fallback

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [
  {
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },
  {
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/about/";
    },
  },
  {
    id: "nav-publications",
    title: "Publications",
    section: "Navigation",
    handler: () => {
      window.location.href = "/publications/";
    },
  },
  {
    id: "nav-projects",
    title: "Projects",
    section: "Navigation",
    handler: () => {
      window.location.href = "/projects/";
    },
  },
  {
    id: "nav-blog",
    title: "Blog",
    section: "Navigation",
    handler: () => {
      window.location.href = "/blog/";
    },
  },
  {
    id: "nav-cv",
    title: "CV",
    section: "Navigation",
    handler: () => {
      window.location.href = "/cv/";
    },
  },
  {
    id: "light-theme",
    title: 'Change theme to light',
    description: 'Change the theme of the site to Light',
    section: 'Theme',
    handler: () => {
      setThemeSetting("light");
    },
  },
  {
    id: 'dark-theme',
    title: 'Change theme to dark',
    description: 'Change the theme of the site to Dark',
    section: 'Theme',
    handler: () => {
      setThemeSetting("dark");
    },
  },
  {
    id: 'system-theme',
    title: 'Use system default theme',
    description: 'Change the theme of the site to System Default',
    section: 'Theme',
    handler: () => {
      setThemeSetting("system");
    },
  },
]; 