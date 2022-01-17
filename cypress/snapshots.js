module.exports = {
  "__version": "9.1.1",
  "CodeMirror": {
    "Should render a \"html\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-html\">\n  <div class=\"cm-activeLine cm-line\"><br></div>\n  <div class=\"cm-line\">&lt;!DOCTYPE html&gt;</div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">html</span> <span\n      class=\"sp-syntax-property\">lang</span>=<span\n      class=\"sp-syntax-string\">\"en\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">head</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">meta</span> <span\n      class=\"sp-syntax-property\">charset</span>=<span\n      class=\"sp-syntax-string\">\"UTF-8\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">meta</span> <span\n      class=\"sp-syntax-property\">name</span>=<span\n      class=\"sp-syntax-string\">\"viewport\"</span> <span\n      class=\"sp-syntax-property\">content</span>=<span\n      class=\"sp-syntax-string\">\"width=device-width,\n      initial-scale=1.0\"</span><span class=\"sp-syntax-punctuation\">&gt;</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">meta</span> <span\n      class=\"sp-syntax-property\">http-equiv</span>=<span\n      class=\"sp-syntax-string\">\"X-UA-Compatible\"</span> <span\n      class=\"sp-syntax-property\">content</span>=<span\n      class=\"sp-syntax-string\">\"ie=edge\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">title</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span>HTML 5 Boilerplate<span\n      class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">title</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">link</span> <span\n      class=\"sp-syntax-property\">rel</span>=<span\n      class=\"sp-syntax-string\">\"stylesheet\"</span> <span\n      class=\"sp-syntax-property\">href</span>=<span\n      class=\"sp-syntax-string\">\"style.css\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">head</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">body</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">script</span> <span\n      class=\"sp-syntax-property\">src</span>=<span\n      class=\"sp-syntax-string\">\"index.js\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span><span\n      class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">script</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">body</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">html</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"><br></div>\n</div>"
    },
    "Should render a \"js\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-js\">\n  <div class=\"cm-activeLine cm-line\"><span\n      class=\"sp-syntax-keyword\">function</span> <span\n      class=\"sp-syntax-definition\">foo</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-plain\">params</span><span\n      class=\"sp-syntax-punctuation\">)</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">return</span> <span\n      class=\"sp-syntax-plain\">params</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">const</span> <span\n      class=\"sp-syntax-plain\">baz</span> = <span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-plain\">foo</span><span\n      class=\"sp-syntax-punctuation\">)</span> <span\n      class=\"sp-syntax-punctuation\">=&gt;</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">return</span> <span\n      class=\"sp-syntax-plain\">foo</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">const</span> <span\n      class=\"sp-syntax-plain\">array</span> = <span\n      class=\"sp-syntax-punctuation\">[</span><span\n      class=\"sp-syntax-punctuation\">]</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">const</span> <span\n      class=\"sp-syntax-plain\">object</span> = <span\n      class=\"sp-syntax-punctuation\">{</span><span\n      class=\"sp-syntax-punctuation\">}</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">const</span> <span\n      class=\"sp-syntax-plain\">regex</span> = <span\n      class=\"sp-syntax-keyword\">new</span> <span\n      class=\"sp-syntax-plain\">Regex</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-comment\">//);</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">const</span> <span\n      class=\"sp-syntax-plain\">expr</span> = <span\n      class=\"sp-syntax-string\">'Papayas'</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">switch</span> <span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-plain\">expr</span><span\n      class=\"sp-syntax-punctuation\">)</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">case</span> <span\n      class=\"sp-syntax-string\">'Oranges'</span><span\n      class=\"sp-syntax-punctuation\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-plain\">console</span>.<span\n      class=\"sp-syntax-property\">log</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-string\">'Oranges are $0.59 a pound.'</span><span\n      class=\"sp-syntax-punctuation\">)</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">break</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">case</span> <span\n      class=\"sp-syntax-string\">'Mangoes'</span><span\n      class=\"sp-syntax-punctuation\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">case</span> <span\n      class=\"sp-syntax-string\">'Papayas'</span><span\n      class=\"sp-syntax-punctuation\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-plain\">console</span>.<span\n      class=\"sp-syntax-property\">log</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-string\">'Mangoes and papayas are $2.79 a\n      pound.'</span><span class=\"sp-syntax-punctuation\">)</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-comment\">// expected output:\n      \"Mangoes and papayas are $2.79 a pound.\"</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">break</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">default</span><span\n      class=\"sp-syntax-punctuation\">:</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-plain\">console</span>.<span\n      class=\"sp-syntax-property\">log</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-string\">`Sorry, we are out of ${</span><span\n      class=\"sp-syntax-plain\">expr</span><span\n      class=\"sp-syntax-string\">}.`</span><span\n      class=\"sp-syntax-punctuation\">)</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n</div>"
    },
    "Should render a \"jsx\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-jsx\">\n  <div class=\"cm-activeLine cm-line\"><span\n      class=\"sp-syntax-keyword\">function</span> <span\n      class=\"sp-syntax-definition\">Greeting</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-punctuation\">{</span> <span\n      class=\"sp-syntax-property\">name</span> <span\n      class=\"sp-syntax-punctuation\">}</span><span\n      class=\"sp-syntax-punctuation\">)</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">return</span> <span\n      class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">h1</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span>Hello, <span\n      class=\"sp-syntax-punctuation\">{</span><span\n      class=\"sp-syntax-plain\">name</span><span\n      class=\"sp-syntax-punctuation\">}</span>!<span\n      class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">h1</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">export</span> <span\n      class=\"sp-syntax-keyword\">default</span> <span\n      class=\"sp-syntax-keyword\">function</span> <span\n      class=\"sp-syntax-definition\">App</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-punctuation\">)</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">return</span> <span\n      class=\"sp-syntax-punctuation\">(</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">div</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">Greeting</span> <span\n      class=\"sp-syntax-property\">name</span>=<span\n      class=\"sp-syntax-string\">\"Divyesh\"</span> <span\n      class=\"sp-syntax-punctuation\">/&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">Greeting</span> <span\n      class=\"sp-syntax-property\">name</span>=<span\n      class=\"sp-syntax-string\">\"Sarah\"</span> <span\n      class=\"sp-syntax-punctuation\">/&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">Greeting</span> <span\n      class=\"sp-syntax-property\">name</span>=<span\n      class=\"sp-syntax-string\">\"Taylor\"</span> <span\n      class=\"sp-syntax-punctuation\">/&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">div</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">)</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n</div>"
    },
    "Should render a \"css\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-css\">\n  <div class=\"cm-activeLine cm-line\"><span class=\"sp-syntax-tag\">body</span>\n    <span class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span\n      class=\"sp-syntax-property\">background-color</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-static\">lightblue</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-tag\">h1</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">color</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-static\">white</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">text-align</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-static\">center</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-tag\">p</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">font-family</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-static\">verdana</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">font-size</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-static\">20</span><span\n      class=\"sp-syntax-keyword\">px</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n</div>"
    },
    "Should render a \"less\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-less\">\n  <div class=\"cm-activeLine cm-line\"><span\n      class=\"sp-syntax-keyword\">@width</span><span\n      class=\"sp-syntax-punctuation\">:</span> 10<span\n      class=\"sp-syntax-keyword\">px</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">@height</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-keyword\">@width</span> + 10<span\n      class=\"sp-syntax-tag\">px</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\">#header <span class=\"sp-syntax-punctuation\">{</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">width</span><span\n      class=\"sp-syntax-punctuation\">:</span> @<span\n      class=\"sp-syntax-static\">width</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">height</span><span\n      class=\"sp-syntax-punctuation\">:</span> @<span\n      class=\"sp-syntax-static\">height</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n</div>"
    },
    "Should render a \"vue\" component with a proper syntax-highlight": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-vue\">\n  <div class=\"cm-activeLine cm-line\"><span\n      class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">template</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">div</span> <span\n      class=\"sp-syntax-property\">class</span>=<span\n      class=\"sp-syntax-string\">\"column is-12\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">label</span> <span\n      class=\"sp-syntax-property\">class</span>=<span\n      class=\"sp-syntax-string\">\"label\"</span> <span\n      class=\"sp-syntax-property\">for</span>=<span\n      class=\"sp-syntax-string\">\"email\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span>Email<span\n      class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">label</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">p</span> <span\n      class=\"sp-syntax-property\">:class</span>=<span class=\"sp-syntax-string\">\"{\n      'control': true }\"</span><span class=\"sp-syntax-punctuation\">&gt;</span>\n  </div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">input</span> <span\n      class=\"sp-syntax-property\">v-validate</span>=<span\n      class=\"sp-syntax-string\">\"'required|email'\"</span> <span\n      class=\"sp-syntax-property\">:class</span>=<span\n      class=\"sp-syntax-string\">\"{'input': true, 'is-danger': errors.has('email')\n      }\"</span> <span class=\"sp-syntax-property\">name</span>=<span\n      class=\"sp-syntax-string\">\"email\"</span> <span\n      class=\"sp-syntax-property\">type</span>=<span\n      class=\"sp-syntax-string\">\"text\"</span> <span\n      class=\"sp-syntax-property\">placeholder</span>=<span\n      class=\"sp-syntax-string\">\"Email\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">span</span> <span\n      class=\"sp-syntax-property\">v-show</span>=<span\n      class=\"sp-syntax-string\">\"errors.has('email')\"</span> <span\n      class=\"sp-syntax-property\">class</span>=<span\n      class=\"sp-syntax-string\">\"help is-danger\"</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span>{{ errors.first('email') }}<span\n      class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">span</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">p</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">div</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">template</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">script</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">export</span> <span\n      class=\"sp-syntax-keyword\">default</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">name</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-string\">'basic-example'</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">script</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n</div>"
    },
    "should render a decoration component properly": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"false\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  data-gramm=\"false\">\n  <div class=\"highlight cm-line\"><span class=\"sp-syntax-keyword\">const</span>\n    <span class=\"sp-syntax-plain\">people</span> = <span\n      class=\"sp-syntax-punctuation\">[</span><span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">id</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-static\">0</span><span\n      class=\"sp-syntax-punctuation\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">name</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-string\">'Creola Katherine Johnson'</span><span\n      class=\"sp-syntax-punctuation\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">profession</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-string\">'mathematician'</span><span\n      class=\"sp-syntax-punctuation\">,</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span><span\n      class=\"sp-syntax-punctuation\">,</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">id</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-static\">1</span><span\n      class=\"sp-syntax-punctuation\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">name</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-string\">'Mario José Molina-Pasquel Henríquez'</span><span\n      class=\"sp-syntax-punctuation\">,</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">profession</span><span\n      class=\"sp-syntax-punctuation\">:</span> <span\n      class=\"sp-syntax-string\">'chemist'</span><span\n      class=\"sp-syntax-punctuation\">,</span></div>\n  <div class=\"highlight cm-line\"><span\n      class=\"sp-syntax-punctuation\">}</span><span\n      class=\"sp-syntax-punctuation\">]</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><br></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">export</span> <span\n      class=\"sp-syntax-keyword\">default</span> <span\n      class=\"sp-syntax-keyword\">function</span> <span\n      class=\"sp-syntax-definition\">List</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-punctuation\">)</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">const</span> <span\n      class=\"sp-syntax-punctuation\">[</span><span\n      class=\"sp-syntax-plain\">text</span><span\n      class=\"sp-syntax-punctuation\">,</span> <span\n      class=\"sp-syntax-plain\">setText</span><span\n      class=\"sp-syntax-punctuation\">]</span> = <span class=\"widget\"\n      data-id=\"1\"><span class=\"sp-syntax-definition\">useState</span><span\n        class=\"sp-syntax-punctuation\">(</span><span\n        class=\"sp-syntax-string\">\"\"</span><span\n        class=\"sp-syntax-punctuation\">)</span></span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">const</span> <span\n      class=\"widget\"\n      data-id=\"2\"><span class=\"sp-syntax-plain\">listItems</span></span> = <span\n      class=\"sp-syntax-plain\">people</span>.<span\n      class=\"sp-syntax-property\">map</span><span\n      class=\"sp-syntax-punctuation\">(</span><span\n      class=\"sp-syntax-plain\">person</span> <span\n      class=\"sp-syntax-punctuation\">=&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">li</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span><span\n      class=\"sp-syntax-punctuation\">{</span><span\n      class=\"sp-syntax-plain\">person</span><span\n      class=\"sp-syntax-punctuation\">}</span><span\n      class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">li</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">)</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-keyword\">return</span> <span\n      class=\"sp-syntax-punctuation\">&lt;</span><span\n      class=\"sp-syntax-tag\">ul</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span><span\n      class=\"sp-syntax-punctuation\">{</span><span\n      class=\"sp-syntax-plain\">listItems</span><span\n      class=\"sp-syntax-punctuation\">}</span><span\n      class=\"sp-syntax-punctuation\">&lt;/</span><span\n      class=\"sp-syntax-tag\">ul</span><span\n      class=\"sp-syntax-punctuation\">&gt;</span><span\n      class=\"sp-syntax-punctuation\">;</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n</div>"
    },
    "should load the autocomplete CodeMirror extension": {
      "1": "<div spellcheck=\"false\"\n  autocorrect=\"off\"\n  autocapitalize=\"off\"\n  translate=\"no\"\n  contenteditable=\"true\"\n  class=\"cm-content\"\n  style=\"tab-size: 4;\"\n  role=\"textbox\"\n  aria-multiline=\"true\"\n  aria-autocomplete=\"list\"\n  aria-expanded=\"false\"\n  data-gramm=\"false\"\n  tabindex=\"-1\"\n  aria-describedby=\"exit-instructions-extensions\">\n  <div class=\"cm-line\"><span class=\"sp-syntax-keyword\">class</span> <span\n      class=\"cm-snippetField\">name</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-property\">constructor</span><span\n      class=\"sp-syntax-punctuation\">(</span><span class=\"cm-snippetField\"><span\n        class=\"sp-syntax-plain\">params</span></span><span\n      class=\"sp-syntax-punctuation\">)</span> <span\n      class=\"sp-syntax-punctuation\">{</span></div>\n  <div class=\"cm-line\"> <span class=\"cm-snippetFieldPosition\"\n      contenteditable=\"false\"></span>​</div>\n  <div class=\"cm-line\"> <span class=\"sp-syntax-punctuation\">}</span></div>\n  <div class=\"cm-line\"><span class=\"sp-syntax-punctuation\">}</span></div>\n</div>"
    }
  }
}
