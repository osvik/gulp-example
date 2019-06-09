# Gulp example

Examples of a `gulpfile.js` and related `package.json` file to develop a website. It concatenates and minifies both CSS and JavaScript and uses sass / scss to develop the stylesheet.

## How to use

To use Gulp, just copy `gulpfile.js` to your project and edit it.

You can also use the `package.json` content and add it to your project. With this file you’ll be able to download everything you need in your project by just running `npm install`.

Use

```bash
gulp
```

to generate both the CSS and JS and

```bash
gulp watch
```

to watch for changes in the `src` directory and generate both the JS and CSS in the `dist` dirctory.
