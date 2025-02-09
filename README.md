# Introduction

**Custom-Combobox** is a combobox component library for React.js, built on top of [Downshift](https://www.downshift-js.com/)
It ensures full ARIA support while offering excellent flexibility.
Additionally, it is **22% lighter** than [React-select](https://react-select.com/).

## Intallation

```
npm install https://github.com/susilodev/custom-combobox
```

or

```
pnpm install https://github.com/susilodev/custom-combobox
```

## style

You must import the CSS alongside the combobox you are importing. This is a required dependency.

```
//component.tsx

import "custom-combobox/dist/custom-combobox.css";
```

## Demo

**Live Demo**: (select-gg-docs.vercel.app)[https://select-gg-docs.vercel.app/]
**StoryBook**: (custom Combobox Storybook)[https://susilodev.github.io/custom-combobox/?path=/story/components-custommultiplecombobox--default]

## Props

| Props        | Type         | Description                                                                                            |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------ |
| `options`    | `Option[]`   | List of options for the dropdown menu.                                                                 |
| `onSelect`   | `() => void` | Callback function triggered when an option is selected (state change).                                 |
| `multiple`   | `boolean`    | Enables or disables the ability to select multiple options.                                            |
| `withSearch` | `boolean`    | Enables or disables the search input functionality. If `false`, it becomes a standard select dropdown. |
