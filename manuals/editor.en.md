# Web-Based Editor: User Guide
[English](editor.en.md) | [Simplified Chinese](editor.zh-CN.md)

This guide provides a detailed description of the various menus in the web editor application. It helps you understand how to customize and make the most of each feature.

## Editor Menu Descriptions

### Choose a Language
- **Description**: Select a programming language for syntax highlighting and validation within the editor.
- **Supported Languages**: Supports various popular programming languages. You can select one from the dropdown to ensure accurate syntax and code validation.

### Choose a Theme
- **Description**: Select a visual theme for the editor.
- **Theme Options**: Visual themes are predefined. You can select one from the dropdown, such as "Monokai". For a full list of available themes, visit [Ace Editor Themes](https://github.com/ajaxorg/ace/tree/master/src/theme).

### Font Size
- **Description**: Adjust the font size for the code displayed in the editor.
- **Input Format**: The value is in 'em', where `1em` equals `16px`.

### Callback URL
- **Description**: A callback URL is used to inject data into the editor from an external service address.
- **Integration**: When the user injects data into the editor from an external service address, the callback URL automatically fills in with that address.

### Render Checkbox
- **Description**: When the "Render" checkbox is enabled, a button is added that allows the user to redirect to the address filled in the Callback URL.
- **Usage**: This feature allows switching between the edit state and the rendered visual output.

### Indentation
- **Description**: Adjust the indentation format for programming statements.
- **Options**:
  - **JSON Language**: The value can be a number (representing the number of spaces) or a string.
  - **Other Languages**: The value format is `"${current value}->${new value}"`. When the user clicks the indent button, the current indentation is replaced with the new value.

### Property Path (Selector)
- **Description**: Used to select and handle specific lines in JSON statements within the editor.
- **Usage**: When editing JSON, the property path can select specific values for individual editing, making it easier to observe changes.
- **Limitations**: Only applicable to JSON. Supports selection of `string` and `object` types only.

### Proxy
- **Description**: Set a proxy address for API requests.
- **Usage**: The `${url}` placeholder in the proxy template is replaced with the actual target URL for API communication.

### Export (File / Project)
- **Description**: Export the edited result as either a "File" or "Project".
- **File**: The content in the current editor view forms a file.
- **Project**: Forms a JSON object containing the actual content, along with scripts for formatting and retrieving data.
- **Advanced Features**: When enabled, files are automatically converted to projects, adding default JavaScript functions.

### Import (File / Project)
- **Description**: Import a file or project into the editor.
- **Supported Formats**: Supports various file types, including `.txt`, `.md`, `.json`, `.yml`, `.html`, `.css`, `.js`, `.py`, `.svg`, etc.

### Enable Advanced Features
- **Description**: Unlock additional features for enhanced editing.
- **Features**:
  - Files will automatically be converted into projects.
  - Adds default JavaScript functions for better formatting and data handling.
  - More scripts can be found at [Editor Scripts](https://github.com/Vector-Index/editor/tree/main/scripts) or [editor repo](https://github1s.com/Vector-Index/editor).

### Back Button
- **Description**: Close the menu display.
- **Function**: Changes take effect immediately, without confirmation. Simply click "Back" to return to the editor.

## Further Tips
- **Customization**: Adjust themes and indentation to suit your preferences for improved readability.
- **Advanced Usage**: Enable advanced features to make full use of the editor's capabilities, such as automatic conversion to projects with JavaScript functions.
- **Callback and Proxy**: Use the callback URL and proxy settings to integrate with external services and APIs.

Feel free to experiment with different settings to find the best configuration for your workflow.