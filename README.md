<div align="center">

<br/>

<img src="logo.png" width="560px" />

<br />
<br />

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fdevcheeze%2Fnotiffy&count_bg=%231679AB&title_bg=%23555555&icon=github.svg&icon_color=%23FFFFFF&title=Hits&edge_flat=false)](https://github.com/devcheeze/notiffy) [![Version](https://img.shields.io/npm/v/notiffy.svg?style=flat&label=Version)]() [![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat&label=License)]()

[![NPM](https://nodei.co/npm/notiffy.png?compact=true)](https://nodei.co/npm/notiffy/)

</div>

<br />

# 👋 Overview

"Notiffy" is a TypeScript-based notification message UI.
<br />
Modern design created using pure CSS makes it accessible for everyone to learn and apply.
<br />
Customization is possible through provided properties and supports vanilla JavaScript as well as TypeScript.
<br/>
Also Supports all frameworks and platforms that use JavaScript, such as React, Vue.js, and JSP.
<br />
Promises regular debugging and continuous updates. (at least one month apart)
<br />
Below are the core features provided by default.
<br />

- <b>Platform Independent</b>
- <b>Four Types Available</b>
- <b>Varient Events</b>
- <b>Most browsers Supported</b>
- <b>Automatically Responsive Size</b>
- <b>MIT License</b>

<br />
<br />

# ⚠️ Usage Cautions

Global CSS may affect "DIV", "SVG" and "Path" tag.
<br />
TypeScript is optional with minimal dependencies required for module building.
<br />
In case of using Node.js, it is advisable to opt for version 18.12.0 or newer. (if possible)

<br />
<br />

# 📥 Installation

Select one of the following methods to add "Notiffy" to your project.
<br />

- When using NPM.
  <br />

```shell
$ npm install notiffy
```

<br />

- When using YARN.
  <br />

```shell
$ yarn add notiffy
```

<br />

- When grab from CDN.
  <br />

```html
<!-- latest version -->
<script src="https://cdn.jsdelivr.net/npm/notiffy/dist/index.js"></script>

<!-- if wanting specific version -->
<script src="https://cdn.jsdelivr.net/npm/notiffy@1.0.0/dist/index.js"></script>
```

<br />
<br />

# ⚡ Quick Start

- Declare module imports.
  <br />

```javascript
import { Toast, Slip, Mole, Alert } from 'notiffy';
// or
const { Toast, Slip, Mole, Alert } = require('notiffy');

// variable declaration
const { Toast, Slip, Mole, Alert } = notiffy;
```

<br />

- When using "Toast" example.
  <br />

```javascript
Toast.warning({
  text: 'hello toast.',
});
```

<br />
<br />

# 💡 How To Apply

- HTML apply example using CDN.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/notiffy/dist/index.js"></script>
  </head>
  <body>
    <div>
      <button onclick="onClickButton()">Click here</button>
    </div>
  </body>
  <script>
    const { Toast } = notiffy; // global variable declaration

    const onClickButton = () => {
      Toast.warning({
        text: 'hello warning toast.',
      });
    };
  </script>
</html>
```

<br />

- Functional React apply example using an imported module. (basic)

```javascript
import { Toast } from 'notiffy'; // import the module

const Example = (): JSX.Element => {
  const onClickButton = (): void => {
    Toast.warning({
      text: 'hello warning toast.',
    });
  };

  return (
    <div>
      <button onClick={onClickButton}>Click here</button>
    </div>
  );
};
```

<br />

- Vue.js apply example using an imported module. (basic)

```vue
<template>
  <div>
    <button @click="onClickButton">Click here</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Toast } from 'notiffy'; // import the module

export default defineComponent({
  name: 'ExampleView',
  setup() {
    const onClickButton = (): void => {
      Toast.warning({
        text: 'hello warning toast.',
      });
    };
    return {
      onClickButton,
    };
  },
});
</script>

<style scoped></style>
```

<br />
<br />

# 🔗 More Infomation

- [Click Here](https://devcheeze.github.io/notiffy/) for document and examples.
- [Click Here](mailto:devcheeze@icloud.com) to send feedback to the creator by email.
