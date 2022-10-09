# Picsum Chrome extension

Example of a simple Chrome extension to obtain random images from [picsum](https://picsum.photos/).

# Development

## Install dependencies

```bash
pnpm install
# or
npm install
```

## Develop mode

```bash
pnpm dev
# or
npm dev
```

## Generate build and use it in Google Chrome

### Generate build

```bash
pnpm build-extension
# or
npm build-extension
```

### Add extension in Google Chrome (dev mode)

1. Go to [chrome://extensions/](chrome://extensions/).
2. Enable development mode.
3. Click in "Load unpacked" and select `dist` folder.
4. The extension should be added.
5. Make changes, execute `build-extension` script and the changes will be applied.