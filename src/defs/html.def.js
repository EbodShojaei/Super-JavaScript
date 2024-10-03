const deepFreeze = require('../../../freeze');

// full list is ai-generated via gpt-4o

// Define possible data types
const TYPES = {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    url: 'url',
};

// Define elements
const EL = {
    div: 'div',
    span: 'span',
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    a: 'a',
    img: 'img',
    ul: 'ul',
    ol: 'ol',
    li: 'li',
    table: 'table',
    thead: 'thead',
    tbody: 'tbody',
    tfoot: 'tfoot',
    tr: 'tr',
    th: 'th',
    td: 'td',
    form: 'form',
    input: 'input',
    button: 'button',
    select: 'select',
    option: 'option',
    textarea: 'textarea',
    label: 'label',
    iframe: 'iframe',
    hr: 'hr',
    br: 'br',
    pre: 'pre',
    code: 'code',
    blockquote: 'blockquote',
    section: 'section',
    header: 'header',
    footer: 'footer',
    nav: 'nav',
    aside: 'aside',
    article: 'article',
    main: 'main',
    figure: 'figure',
    figcaption: 'figcaption',
    audio: 'audio',
    video: 'video',
    canvas: 'canvas',
    svg: 'svg',
};

// Define properties with both key and type
const PROPS = {
    id: { _: 'id', type: TYPES.string },
    class: { _: 'class', type: TYPES.string },
    style: { _: 'style', type: TYPES.string },
    title: { _: 'title', type: TYPES.string },
    href: { _: 'href', type: `${TYPES.url} | ${TYPES.string}` },
    src: { _: 'src', type: TYPES.url },
    alt: { _: 'alt', type: TYPES.string },
    width: { _: 'width', type: TYPES.number },
    height: { _: 'height', type: TYPES.number },
    target: { _: 'target', type: TYPES.string },
    rel: { _: 'rel', type: TYPES.string },
    download: { _: 'download', type: TYPES.boolean },
    method: { _: 'method', type: TYPES.string },
    action: { _: 'action', type: TYPES.url },
    enctype: { _: 'enctype', type: TYPES.string },
    type: { _: 'type', type: TYPES.string },
    name: { _: 'name', type: TYPES.string },
    value: { _: 'value', type: `${TYPES.string} | ${TYPES.number}` },
    placeholder: { _: 'placeholder', type: TYPES.string },
    checked: { _: 'checked', type: TYPES.boolean },
    disabled: { _: 'disabled', type: TYPES.boolean },
    readonly: { _: 'readonly', type: TYPES.boolean },
    maxlength: { _: 'maxlength', type: TYPES.number },
    minlength: { _: 'minlength', type: TYPES.number },
    size: { _: 'size', type: TYPES.number },
    multiple: { _: 'multiple', type: TYPES.boolean },
    autoplay: { _: 'autoplay', type: TYPES.boolean },
    controls: { _: 'controls', type: TYPES.boolean },
    loop: { _: 'loop', type: TYPES.boolean },
    muted: { _: 'muted', type: TYPES.boolean },
    preload: { _: 'preload', type: TYPES.string },
    poster: { _: 'poster', type: TYPES.url },
    step: { _: 'step', type: TYPES.number },
    pattern: { _: 'pattern', type: TYPES.string },
    novalidate: { _: 'novalidate', type: TYPES.boolean },
    accept: { _: 'accept', type: TYPES.string },
    loading: { _: 'loading', type: TYPES.string },
    srcset: { _: 'srcset', type: TYPES.string },
    sizes: { _: 'sizes', type: TYPES.string },
    selected: { _: 'selected', type: TYPES.boolean },
    colspan: { _: 'colspan', type: TYPES.number },
    rowspan: { _: 'rowspan', type: TYPES.number },
    role: { _: 'role', type: TYPES.string },
    for: { _: 'for', type: TYPES.string },
    tabindex: { _: 'tabindex', type: TYPES.number },
    hidden: { _: 'hidden', type: TYPES.boolean },
    draggable: { _: 'draggable', type: TYPES.boolean },
    spellcheck: { _: 'spellcheck', type: TYPES.boolean },
    contenteditable: { _: 'contenteditable', type: TYPES.boolean },
    lang: { _: 'lang', type: TYPES.string },
};

// Aggregate EL and PROPS into HTML
const HTML = {
    // [EL.div]:[PROPS.id, PROPS.class, PROPS.style, PROPS.id, PROPS.class, PROPS.style],
    [EL.a]:[PROPS.id, PROPS.class, PROPS.style, PROPS.href, PROPS.target, PROPS.rel, PROPS.download],
    [EL.img]:[PROPS.id, PROPS.class, PROPS.style, PROPS.src, PROPS.alt, PROPS.width, PROPS.height, PROPS.loading, PROPS.srcset, PROPS.sizes],
    [EL.input]:[PROPS.id, PROPS.class, PROPS.style, PROPS.type, PROPS.name, PROPS.value, PROPS.placeholder, PROPS.checked, PROPS.disabled, PROPS.readonly, PROPS.maxlength, PROPS.minlength, PROPS.size, PROPS.accept],
    [EL.form]:[PROPS.id, PROPS.class, PROPS.style, PROPS.action, PROPS.method, PROPS.enctype, PROPS.novalidate],
    [EL.button]:[PROPS.id, PROPS.class, PROPS.style, PROPS.type, PROPS.name, PROPS.value, PROPS.disabled],
    [EL.video]:[PROPS.id, PROPS.class, PROPS.style, PROPS.src, PROPS.controls, PROPS.autoplay, PROPS.loop, PROPS.muted, PROPS.preload, PROPS.poster],
    [EL.audio]:[PROPS.id, PROPS.class, PROPS.style, PROPS.src, PROPS.controls, PROPS.autoplay, PROPS.loop, PROPS.muted, PROPS.preload],
    [EL.label]:[PROPS.id, PROPS.class, PROPS.style, PROPS.for],
    [EL.select]:[PROPS.id, PROPS.class, PROPS.style, PROPS.name, PROPS.multiple, PROPS.disabled, PROPS.size],
    [EL.option]:[PROPS.id, PROPS.class, PROPS.style, PROPS.value, PROPS.selected],
    [EL.iframe]:[PROPS.id, PROPS.class, PROPS.style, PROPS.src, PROPS.width, PROPS.height, PROPS.title, PROPS.loading],
    [EL.table]:[PROPS.id, PROPS.class, PROPS.style, PROPS.border, PROPS.cellspacing, PROPS.cellpadding],
    [EL.th]:[PROPS.id, PROPS.class, PROPS.style, PROPS.scope, PROPS.colspan, PROPS.rowspan],
    [EL.td]:[PROPS.id, PROPS.class, PROPS.style, PROPS.colspan, PROPS.rowspan],
    [EL.tr]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.ul]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.ol]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.li]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.hr]:[PROPS.id, PROPS.class, PROPS.style, PROPS.role],
    [EL.br]:[],
    [EL.pre]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.code]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.blockquote]:[PROPS.id, PROPS.class, PROPS.style, PROPS.cite],
    [EL.section]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.header]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.footer]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.nav]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.aside]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.article]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.main]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.figure]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.figcaption]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.canvas]:[PROPS.id, PROPS.class, PROPS.style, PROPS.width, PROPS.height],
    [EL.svg]:[PROPS.id, PROPS.class, PROPS.style, PROPS.width, PROPS.height],
    [EL.span]:[PROPS.id, PROPS.class, PROPS.style, PROPS.lang, PROPS.title],
    [EL.p]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.h1]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.h2]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.h3]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.h4]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.h5]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.h6]:[PROPS.id, PROPS.class, PROPS.style],
    [EL.div]:[PROPS.id, PROPS.class, PROPS.style],
};

/**
 * Set of HTML elements that do not accept styles or attributes
 * @constant
 * @name LIM_HTML
 * @type {Set<string>} Set of HTML elements
 * @example
 * // Returns true
 * LIM_HTML.has('br');
 * 
 */
const LIM_HTML = {
    [EL.br]: EL.br,
    [EL.meta]: EL.meta,
    [EL.link]: EL.link,
    [EL.param]: EL.param,
    [EL.source]: EL.source,
    [EL.track]: EL.track,
    [EL.wbr]: EL.wbr,
    [EL.col]: EL.col,
    [EL.base]: EL.base,
};

// Freeze all objects
deepFreeze(EL);
deepFreeze(PROPS);
deepFreeze(HTML);
deepFreeze(LIM_HTML);

// test if freeze works
// EL.div = 'span'; // This will have no effect
// console.log(EL.div); // Outputs: 'div'

// PROPS['width'] = { _: 'div', type: TYPES.boolean }; // This will have no effect
// console.log(PROPS['width']); // Outputs: { _: 'width', type: 'number' }

// HTML[EL.img] = [PROPS.src, PROPS.alt]; // This will have no effect
// console.log(HTML[EL.img]); // Outputs:[PROPS.id, PROPS.class, PROPS.style, 'src', 'alt', 'width', 'height', 'loading', 'srcset', 'sizes']

// console.log(LIM_HTML['div']); // Outputs: undefined

module.exports = {
    EL,
    PROPS,
    HTML,
    LIM_HTML,
};
