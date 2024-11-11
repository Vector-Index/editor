# Web-Based Editor App: Settings Manual
[English](editor.en.md) | [简体中文](editor.zh-CN.md)

This manual provides a detailed overview of the Settings menu in the web-based editor app. Here, you can learn how to customize and make the most out of each available feature.

## Settings Menu Overview

### Choose a Language
- **Description**: Select the programming language for syntax highlighting and validation in the editor.
- **Supported Languages**: A range of popular programming languages is supported to ensure accurate syntax and code validation.

### Choose a Theme
- **Description**: Select the visual theme for the editor.
- **Theme Options**: Themes are pre-defined. You can choose from several options, such as "Monokai." For a full list of available themes, please visit [Ace Editor Themes](https://github.com/ajaxorg/ace/tree/master/src/theme).

### Font Size
- **Description**: Adjust the font size of the code displayed in the editor.
- **Input Format**: The input value is in 'em', where `1em` is equivalent to `16px`.

### Callback URL
- **Description**: A callback URL is used to inject data into the editor from external services.
- **Integration**: When a user is redirected to the editor from such a service, the callback URL will be automatically filled.

### Render Checkbox
- **Description**: The "Render" checkbox, when enabled, adds a button that allows users to be redirected to the callback URL.
- **Usage**: This allows data from external services to be visualized and interacted with within the editor.

### Indentation
- **Description**: Adjust indentation settings for formatting.
- **Options**:
  - **JSON Language**: The value can be either a number (number of spaces) or a string.
  - **Other Languages**: The format of the value is "`${current}->${new}`", which replaces the current indentation with the new one when the user clicks the indentation button.

### Property Path (Selector)
- **Description**: Used for JSON data extraction and manipulation within the editor.
- **Usage**: When editing JSON, specify a property path to extract or modify specific values. This feature is especially useful for modifying long multi-line strings or objects.
- **Limitations**: Only available for JSON language. Only `string` and `object` types are selectable.

### Proxy
- **Description**: Set up a proxy address for API requests.
- **Usage**: `${url}` in the proxy template will be replaced by the actual target URL to facilitate API communication.

### Export (File / Project)
- **Description**: Choose to export either a "File" or a "Project."
- **File**: The content in the current editor view.
- **Project**: A JSON object containing a property named "content," which includes the actual content, along with any scripts for formatting and fetching data.
- **Advanced Features**: When enabled, a file will automatically be converted to a project, with default JavaScript functions added.

### Import (File / Project)
- **Description**: Import a file or project into the editor.
- **Supported Formats**: Supports a variety of file types, including `.txt`, `.md`, `.json`, `.yml`, `.html`, `.css`, `.js`, `.py`, `.svg`, and more.

### Enable Advanced Features
- **Description**: Unlocks additional functionalities for enhanced editing.
- **Features**:
  - Files are automatically converted to Projects.
  - Default JavaScript functions are added for better formatting and data manipulation.

### Back Button
- **Description**: Close the Settings menu.
- **Functionality**: Changes are applied immediately without requiring confirmation. Simply click "Back" to return to the editor.

## Tips for Using the Settings Menu
- **Customization**: Adjust themes and indentation to fit your preferences for better readability.
- **Advanced Usage**: Enable advanced features to take advantage of the full capabilities of the editor, such as automatic conversion to Projects with JavaScript functions.
- **Callback and Proxy**: Utilize the callback URL and proxy settings for integration with external services and APIs.

Feel free to experiment with the settings to find a configuration that best suits your workflow.

