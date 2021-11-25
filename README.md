# vemoji-list

Patterns to contruct reliable regular expressions to match emojis in a string.
This package is a fork of [Bright/bright-comment](https://gitee.com/bright-boy/bright-comment)

## Installation

Navigate to your project directory and run

```sh
$ npm install vemoji-list
# or
yarn add vemoji-list
```

## Vue Examples

```js
<span v-for="emoji in emojiList" :key="emoji?.url" @click="insetEmoji(emoji?.title)">
    <span v-html="parsingEmoji(`[${emoji?.title}]`)"></span>
</span>

<script lang="ts">
import { emojiList, parsingEmoji } from 'vemoji-list';

export default {
    ...
    data() {
        return { emojiList, parsingEmoji };
    }
};
</script>

<style lang="scss">
.emoji-img {
    width: 14px;
    height: 20px;
    object-fit: contain;
    margin: 0 2px;
}
</style>
```
