/**
 * Atoms are the smallest components that are responsible for one specific
 * function. For example, button with label, text field, spinner, etc.
 *
 * A Label, Input, Button are simple components but will have configuration
 * which will be used by molecules. Such configuration can be a specific font
 * name, that way when a form (molecule) integrates an input (atom), then we
 * dont have to add a font name for that input in the form file, cause it already
 * comes with a font name by default, we can anyways pass a font name as a prop
 * just in case we would need the functionality of that atom compnent but just
 * a different font name. That way also, if you need to change your app's theme
 * and thus changing the font name, you wouldnt have to change every file, every
 * component font nane, but only the atom component file and changes would be
 * applied to all of your components and thus changes will be reflected all over
 * your app.
 */
