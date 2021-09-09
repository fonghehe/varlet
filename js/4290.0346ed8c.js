(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[4290],{4290:(s,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>n});var e=l(7875),t={class:"varlet-site-doc"},c=(0,e.uE)('<h1>Ripple Directive</h1><div class="card"><h3>Intro</h3><p>Causes the element to generate a ripple spread effect when clicked.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Ripple } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Ripple)\n</code></pre></div><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>&gt;</span>click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Custom Color</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>=<span class="hljs-string">&quot;{ color: &#39;#2979ff&#39; }&quot;</span>&gt;</span>click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Disabled Status</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>=<span class="hljs-string">&quot;{ disabled: true }&quot;</span>&gt;</span>click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>Options</h3><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Ripple color</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div>',8);const n={render:function(s,a){return(0,e.wg)(),(0,e.j4)("div",t,[c])}}}}]);