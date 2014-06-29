PvLibBundle
===========

Installation
------------

To `composer.json`:

```json
{
  "require": {
    "pv/lib-bundle": "*@dev"
  },
  "repositories": [
    {
      "type": "vcs",
      "url": "git@github.com:pvolok/PvLibBundle.git"
    }
  ]
}
```

To `AppKernel`:

```php
new Pv\LibBundle\PvLibBundle(),
```
