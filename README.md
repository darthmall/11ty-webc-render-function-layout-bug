# 11ty WebC Render Function Layout Bug

Reproduce a bug where a render function that’s part of a WebC layout in Eleventy is not re-processed as WebC, but the same render function in a page template is.

## Inputs

- **src/components/test-comp.webc** an HTML-only WebC component for testing
- **src/layouts/base.webc** Renders `<test-comp>` inside and outside a render function, followed by the page template content
- **src/pages/works.webc** Renders `<test-comp>` inside and outside a render function
- **src/pages/index.md** Template that uses `base.webc` layout

## Run the build

```
npm run build
```

## Expected output

**_site/index.html**
```html
<h2>Test component</h2>
<p>Bare Component</p>

<h2>Test component</h2>
<p>Render function</p>

<h2>Content</h2>
<p>Howdy howdy</p>
```

**_site/works/index.html**
```html
<h2>Test component</h2>
<p>Bare Component</p>

<h2>Test component</h2>
<p>Render function</p>
```

## Actual output

**_site/index.html**
```html
<h2>Test component</h2>
<p>Bare Component</p>

<test-comp>Render function</test-comp>

<h2>Content</h2>
<p>Howdy howdy</p>
```

**_site/works/index.html**
```html
<h2>Test component</h2>
<p>Bare Component</p>

<h2>Test component</h2>
<p>Render function</p>
```

