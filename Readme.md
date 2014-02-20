*This repository is a mirror of the [component](http://component.io) module [yields/wordwrap](http://github.com/yields/wordwrap). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-wordwrap`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# wordwrap

  wordwrap

## Installation

    $ component install yields/wordwrap

## API

### wordwrap(str, max, eol)

```javascript
wordwrap('Hello, World!', 5, '\n');
// > 'Hello\n, Wor\nld!'
```

### wordwrap(str, max)

```javascript
wordwrap('Hello, World!', 5);
// > 'Hello\n, Wor\nld!'
```

## Tests

    # make test

## License

  MIT
