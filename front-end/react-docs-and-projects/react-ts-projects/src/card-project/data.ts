import ReactImg from "../assets/react.png";
import SvelteImg from "../assets/svelte.png";
import VueImg from "../assets/vue.png";

export const frameworks = [
  {
    framework: `React`,
    creator: `Jordan Walke`,
    info: ` It lets you put components together, but it doesn't prescribe how to do routing and data fetching`,
    img: ReactImg,
    alt: `Is horrible`,
    headingColor: `#61dafb`,
  },
  {
    framework: `Svelte`,
    creator: `Rich Harris`,
    info: `Svelte converts your app into ideal JavaScript at build time, rather than interpreting your application code at run time`,
    img: SvelteImg,
    alt: `svelte`,
    headingColor: `#ea580c`,
  },
  {
    framework: `Vue`,
    creator: `Evan You`,
    info: `Simplicity and learning curve: Vue. js is easy to learn and use, with only HTML, CSS, and JavaScript basics required. `,
    img: VueImg,
    alt: `vue`,
    headingColor: `#42b883`,
  },
];
