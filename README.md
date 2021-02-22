# Tree Visualizer

Tree visualizer is a tool written in js, html and css to represent some data structures in better way. Also, it has some features that facilitates learning
process of a data stucture.

## Installation

First you need to install pixi and pixi-viewport. You can follow the instructions from their documentations. Afterwards,

```
git clone https://github.com/bahadirkisbet/tree_visualizer.github.io.git
```

would be enough. If there are any bug, please let us know in 'Issues' section.

## Usage

### HTML Part

There is a template.html in template folder. When you want to add new data stuctures, you need to import the js file in here. Other dependencies are imported from unkpg.com.

### CSS Part

We use [blueprint](https://blueprintjs.com/) framework in our css style. It is easy to use.

### Javascript Part

Our main application is running on PIXI. It creates an interactive environment to use and learn a website. As you can see in the template folder, there is template.js file. If you want to add a new data stucture, you need to implement it into there. Since PIXI should be imported for our project and browser side does not support "require" or "import" keywords in general in javascript files, we use a useful command called [browserify](http://browserify.org/).

#### Usage
```
browserify scripts/{your_js_file}.js > bundle_{your_new_js_file}.js
```
Then you can import the new bundle_{your_new_js_file}.js file into a html file.

## TODO

1. We need an animation system for all data structures ( Probably will be using animejs )
2. We need a tester template for a data structures. 
3. We need pseudo codes of the algorithms of data stuctures ( for explanation purposes )
