# Neumorphic Web Component Dropdown 

## Usage

1. Import the script
2. Use the custom component on the markdown
```html
<my-dropdown text-button="Click me!" dropdown-template-id="my-dropdown-list"></my-dropdown>
```
3. Define the template for the dropdown
```html
    <template id="my-dropdown-list">
      <ul>
        <li>First list</li>
        <li>Second list</li>
        <li><a href="https://instagram.com/danangan">Link to my instagram</a></li>
        <li><a href="https://twitter.com/danangan">Link to my twitter</a></li>
      </ul>
    </template>
```

## Available Attributes
* text-button
* dropdown-template-id


## Demo
![Demo](https://danangan.github.io/web-component-dropdown/demo.gif)
