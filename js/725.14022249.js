(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[725],{725:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>d});var l=n(7875),t={class:"varlet-site-doc"},e=(0,l.uE)('<h1>无限滚动列表</h1><div class="card"><h3>介绍</h3><p>无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { List } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(List)\n</code></pre></div><div class="card"><h3>基本使用</h3><p>当检测到滚动容器滚动到底部底部时会触发<code>load</code>事件，并会设置<code>loading</code>为<code>true</code>，在加载结束时您需要手动设置<code>loading</code>为<code>false</code>，表示加载结束。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-list</span>\n  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>\n  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>\n  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;load&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span>&gt;</span>\n    列表项: {{ item }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-list</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> finished = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> list = reactive([])\n    \n    <span class="hljs-keyword">const</span> load = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">20</span>; i++) {\n          list.push(list.length + <span class="hljs-number">1</span>)\n        }\n\n        loading.value = <span class="hljs-literal">false</span>\n\n        <span class="hljs-keyword">if</span> (list.length &gt;= <span class="hljs-number">60</span>) {\n          finished.value = <span class="hljs-literal">true</span>\n        }\n      }, <span class="hljs-number">1000</span>)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      list,\n      loading,\n      finished,\n      load\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>加载失败</h3><p>您可以使用<code>v-model:error</code>手动设置错误状态，会展示错误提示，点击错误提示会帮您把<code>error</code>设置成<code>false</code>并再次触发<code>load</code>事件。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-list</span>\n  <span class="hljs-attr">v-model:error</span>=<span class="hljs-string">&quot;error&quot;</span>\n  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>\n  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;load&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span>&gt;</span>\n    列表项: {{ item }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-list</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> error = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> list = reactive([])\n    \n    <span class="hljs-keyword">const</span> load = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">if</span> (list.length === <span class="hljs-number">40</span>) {\n          error.value = <span class="hljs-literal">true</span>\n          loading.value = <span class="hljs-literal">false</span>\n          <span class="hljs-keyword">return</span>\n        }\n\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">20</span>; i++) {\n          list.push(list.length + <span class="hljs-number">1</span>)\n        }\n\n        loading.value = <span class="hljs-literal">false</span>\n      }, <span class="hljs-number">1000</span>)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      list,\n      loading,\n      error,\n      load\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>提示文字</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-list</span> \n  <span class="hljs-attr">loading-text</span>=<span class="hljs-string">&quot;正在努力输出&quot;</span> \n  <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;一滴都没有了&quot;</span> \n  <span class="hljs-attr">error-text</span>=<span class="hljs-string">&quot;出错了出错了&quot;</span> \n  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span> \n  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> \n  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;load&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span>&gt;</span>\n    列表项: {{ item }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-list</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> finished = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> list = reactive([])\n    \n    <span class="hljs-keyword">const</span> load = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">20</span>; i++) {\n          list.push(list.length + <span class="hljs-number">1</span>)\n        }\n\n        loading.value = <span class="hljs-literal">false</span>\n\n        <span class="hljs-keyword">if</span> (list.length &gt;= <span class="hljs-number">60</span>) {\n          finished.value = <span class="hljs-literal">true</span>\n        }\n      }, <span class="hljs-number">1000</span>)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      list,\n      loading,\n      finished,\n      load\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>注意</h3><p>我们是通过监听滚动容器的<code>scroll</code>事件检测是否触底并执行加载。 滚动容器是指最近的一个<code>overflow-y</code>为<code>auto</code>或者<code>scroll</code>的元素。 当您设置一个元素的<code>overflow-x</code>为除了<code>visible</code>以外的值时，浏览器为了维护一个<code>bfc</code>的结构会使您的<code>overflow-y</code>修正为<code>auto</code>。 这时我们就会误认为这个元素也是一个滚动容器，注意规避。</p></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>错误状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>是否在组件初始化时立刻检测位置</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>是否加载完毕</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>距离底部的触发距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>加载状态文字</td><td><em>string</em></td><td><code>加载中</code></td></tr><tr><td><code>finished-text</code></td><td>加载完毕文字</td><td><em>string</em></td><td><code>没有更多了</code></td></tr><tr><td><code>error-text</code></td><td>加载失败文字</td><td><em>string</em></td><td><code>加载失败</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>check</code></td><td>触发位置检查, 触底触发load事件。</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>load</code></td><td>触底时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>列表内容</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>加载中内容</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>加载失败内容</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>加载完毕内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',13);const d={render:function(s,a){return(0,l.wg)(),(0,l.j4)("div",t,[e])}}}}]);