# [1.7.0](https://github.com/mysterycommand/mysterycommand/compare/v1.6.3...v1.7.0) (2020-02-09)


### Bug Fixes

* class name + styles ([409a862](https://github.com/mysterycommand/mysterycommand/commit/409a862312e346c4778511c222c628a415c186dd))
* opt in to dpl v2 to make skip_cleanup: true/cleanup: false the default ([d19d26b](https://github.com/mysterycommand/mysterycommand/commit/d19d26bec85f3b8dffe5845545be33c3b6bfe990))
* v2 is more different than I thought at first glance, just use try the old way until it's time to really rewrite all this ([de3ea04](https://github.com/mysterycommand/mysterycommand/commit/de3ea04674d308514a0522e9e3f41ebe31ab0ea4))


### Features

* **screenshots:** use a fork of react-snap that shims rAF to get screenshots working ([b454159](https://github.com/mysterycommand/mysterycommand/commit/b454159a9bc780c8c2c3aee361afd00c9cea9d8b))

## [1.6.3](https://github.com/mysterycommand/mysterycommand/compare/v1.6.2...v1.6.3) (2020-01-30)


### Bug Fixes

* use promisified exec ([509a1b0](https://github.com/mysterycommand/mysterycommand/commit/509a1b015f8bfd9bc8a052e1f10d8165a480fbde))

## [1.6.2](https://github.com/mysterycommand/mysterycommand/compare/v1.6.1...v1.6.2) (2019-10-02)


### Bug Fixes

* fix npm high severity vlnerabilities ([c69f3d3](https://github.com/mysterycommand/mysterycommand/commit/c69f3d3))

## [1.6.1](https://github.com/mysterycommand/mysterycommand/compare/v1.6.0...v1.6.1) (2019-08-01)


### Bug Fixes

* **head:** update the twitter:card meta tag to 'summary_large_image' ([59bcf28](https://github.com/mysterycommand/mysterycommand/commit/59bcf28))

# [1.6.0](https://github.com/mysterycommand/mysterycommand/compare/v1.5.0...v1.6.0) (2019-08-01)


### Features

* **head:** clean up head by splitting og tags into groups, but react-helmet doesn't support this ([b101126](https://github.com/mysterycommand/mysterycommand/commit/b101126))

# [1.5.0](https://github.com/mysterycommand/mysterycommand/compare/v1.4.0...v1.5.0) (2019-08-01)


### Bug Fixes

* **colophon:** fix test errors, update styling ([2132aca](https://github.com/mysterycommand/mysterycommand/commit/2132aca))
* **hero:** make sure the hero-text (ne header)'s padding is clamped ([715011b](https://github.com/mysterycommand/mysterycommand/commit/715011b))


### Features

* **colophon:** add a bunch of links to the colophon, pull stuff from package.json ([36fc08c](https://github.com/mysterycommand/mysterycommand/commit/36fc08c))
* **colophon:** add copyright and licenses to colophon ([aa8ae65](https://github.com/mysterycommand/mysterycommand/commit/aa8ae65))
* **components/head:** add a head component to render dynamic meta tags and og/twitter tags ([9980d9a](https://github.com/mysterycommand/mysterycommand/commit/9980d9a))
* **favicon.ico:** update favicon, manual for now ([3ce5342](https://github.com/mysterycommand/mysterycommand/commit/3ce5342))
* **hero, colophon:** split the app into parts, shuffle css around, stub in a colophon ([4447b7b](https://github.com/mysterycommand/mysterycommand/commit/4447b7b))

# [1.4.0](https://github.com/mysterycommand/mysterycommand/compare/v1.3.0...v1.4.0) (2019-07-23)


### Bug Fixes

* **splash:** don't try to wait for/render the react-three-fiber component in postbuild ([50c5b15](https://github.com/mysterycommand/mysterycommand/commit/50c5b15))


### Features

* **app:** add link to self in header ([43ba3a5](https://github.com/mysterycommand/mysterycommand/commit/43ba3a5))
* **app/style:** make the text-shadow also scale, and make position relative on .app ([b48242c](https://github.com/mysterycommand/mysterycommand/commit/b48242c))
* **splash:** add a react-three-fiber based splash div behind the header ([288f8df](https://github.com/mysterycommand/mysterycommand/commit/288f8df))
* **splash:** add react-spring and animate the boxes intros ([238aa20](https://github.com/mysterycommand/mysterycommand/commit/238aa20))
* **splash:** generate the boxes with an array map (more flexible scaling/number options) ([d84486b](https://github.com/mysterycommand/mysterycommand/commit/d84486b))
* **splash, boxes, box:** refactor box and boxes into their own components, async load boxes ([9510c9a](https://github.com/mysterycommand/mysterycommand/commit/9510c9a))
* **styles:** remove underline from the (new) big link in the header ([0c6eaf0](https://github.com/mysterycommand/mysterycommand/commit/0c6eaf0))

# [1.3.0](https://github.com/mysterycommand/mysterycommand/compare/v1.2.0...v1.3.0) (2019-07-22)


### Features

* **domain:** mysterycommand.github.io -> mysterycommand.com ([5ae220b](https://github.com/mysterycommand/mysterycommand/commit/5ae220b))
* **link-type attributes:** add link-type attributes, and a type attribute to my links ([3fb9894](https://github.com/mysterycommand/mysterycommand/commit/3fb9894))
* **resume:** add an up to the minute copy of my resume an link to it in the links list ([3817ab6](https://github.com/mysterycommand/mysterycommand/commit/3817ab6))

# [1.2.0](https://github.com/mysterycommand/mysterycommand/compare/v1.1.0...v1.2.0) (2019-07-22)


### Features

* **hlist:** move the common horizontal list functionality (mostly styling) into a shared hlist ([2b44ee7](https://github.com/mysterycommand/mysterycommand/commit/2b44ee7))
* **styles:** add class names to components, move a couple things up to global css scope ([bbf7198](https://github.com/mysterycommand/mysterycommand/commit/bbf7198))

# [1.1.0](https://github.com/mysterycommand/mysterycommand/compare/v1.0.2...v1.1.0) (2019-07-20)


### Bug Fixes

* **links:** add a key to the map-generated li's ([6ca28f4](https://github.com/mysterycommand/mysterycommand/commit/6ca28f4))


### Features

* **index:** add a reducer, initial state, rehydration, and a simple updater ([8fb9aa0](https://github.com/mysterycommand/mysterycommand/commit/8fb9aa0))

## [1.0.2](https://github.com/mysterycommand/mysterycommand/compare/v1.0.1...v1.0.2) (2019-07-20)


### Bug Fixes

* **travis:** dist -> build (stupid copy/paste) ([682a872](https://github.com/mysterycommand/mysterycommand/commit/682a872))

## [1.0.1](https://github.com/mysterycommand/mysterycommand/compare/v1.0.0...v1.0.1) (2019-07-20)


### Bug Fixes

* fix commit to ensure patch version bump ([faee1ee](https://github.com/mysterycommand/mysterycommand/commit/faee1ee))
