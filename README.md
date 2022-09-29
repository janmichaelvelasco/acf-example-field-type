# ACF Example Field Type

Reference code to register a new [Advanced Custom Fields](https://www.advancedcustomfields.com/) field type.

Intended for use in an existing theme or plugin.

## Setup

1. Download this repository:
    - [Download as a ZIP file](https://github.com/deliciousbrains/acf-example-field-type/archive/refs/heads/main.zip)
    - Or clone with `git clone https://github.com/deliciousbrains/acf-example-field-type.git`
2. Rename placeholder strings such as `FIELD-NAME` manually or with the helper script: 
    - `cd` into the directory and run `npm ci` (requires [Node.js](https://nodejs.org/)).
    - Run `npm run rename` and follow the prompts.
3. After renaming, copy the `acf-[your-field-name]` directory into your theme or plugin.
4. Add this code to your theme or plugin to initialize the new field type:

    ```php
    include_once __DIR__ . '/acf-FIELD-NAME/init.php';    
    ```

5. You should now see your new field type in the “Field Type” list when you add a new field.
6. Edit `init.php` to pass your plugin or theme details to the field class. This makes sure the field's CSS and JS load correctly.
7. Change your field type's settings and behavior by editing `class-PREFIX-acf-field-FIELD-NAME.php`.
8. Edit or remove `field.css` to control the field's appearance when edited by publishers (e.g. on post editor screens).
9. Edit or remove `field.js` to adjust the field's behavior when edited by publishers.

If you remove `field.css` or `field.js`, be sure to also remove the `wp_enqueue` calls in `class-PREFIX-acf-field-FIELD-NAME.php`.
