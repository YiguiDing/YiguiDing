import{_ as s,o as e,c as n,e as a}from"./app-UBWqAwBa.js";const t="/assets/98e2d9d7e5fd0ced7043c50a28be71243a50b4830341e38753308ed6f96eac4f-_EqBnhDQ.png",c="/assets/ea42bffa2f50e7090b52dced9381273fb9276f334a863d6e8c1cda6b3030a98e-74THjaoP.png",i="/assets/d54fd4c159d8f58627c6ec16a28ced8b2f47fd3a1b7d57dedd94031a6c68c6d3-2aBgLY8y.png",l="/assets/6c7400885884577a2b676133ffe162ed3485dea02996e03b7c9c9ef45c307f7d-VBa9QG80.png",r="/assets/c0eb4ee022cca679c29669fd4cd0171fb124ccacec29670bb9dcdca59d46176c-JLlhh4GT.png",o="/assets/273368cf71de2ec25d2f2db736245f692c0a4d209a18a8c7d8f2bb9c64d0c1ec-k5pmqffk.png",d="/assets/816173bb4129ce92bbb68192a9f57d0218df7d1f3fb78ba2f6e0ce90a37f858d-B52F4imA.png",m="/assets/8146b3f22175a2139a6edd516eabedd020c7d394772057d918fba0c2d00ed3fc-M6ZaJRde.png",p="/assets/3a54b606903275febc7a5e9d03f031bab96c4e1aa09b64e986b5b405a5581d48-U6ZjH7rS.png",b="/assets/379bb20613e6ebf812129a2ce13ca9a14eef295f69cdc41ecb5b40a9f45346bc-hqtiW8s5.png",u="/assets/df4be11a914591cdeb1327c453b4d988bca8de2ce1deb45ab89f4015e821527e-S1e2SHIs.png",v="/assets/6e926867c2eb90dbcebe8911a7863ea099f4bc6c2230fafb7a94982fd8d4e4cd-uE6wTFTc.png",h="/assets/b67d7716a9270e7e723ba322faa4293cf706c1e35d8b7969ee5356446923b6e7-bEzkAA8q.png",k={},f=a(`<h1 id="mkcert生成自签https证书过程记录" tabindex="-1"><a class="header-anchor" href="#mkcert生成自签https证书过程记录" aria-hidden="true">#</a> mkcert生成自签https证书过程记录</h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><a href="#mkcert%E7%94%9F%E6%88%90%E8%87%AA%E7%AD%BEhttps%E8%AF%81%E4%B9%A6%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95">mkcert生成自签https证书过程记录</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E7%9B%B8%E5%85%B3%E6%A6%82%E5%BF%B5">相关概念</a></li><li><a href="#%E5%AE%89%E8%A3%85mkcert">安装mkcert</a></li><li><a href="#%E7%94%9F%E6%88%90%E7%94%A8%E6%88%B7%E8%AF%81%E4%B9%A6">生成用户证书</a></li><li><a href="#%E5%AE%89%E8%A3%85%E9%A2%81%E5%8F%91%E8%80%85%E8%AF%81%E4%B9%A6">安装颁发者证书</a><ul><li><a href="#%E5%9C%A8pc%E7%AB%AF%E5%AE%89%E8%A3%85">在PC端安装</a></li><li><a href="#%E5%9C%A8ios%E7%AB%AF%E5%AE%89%E8%A3%85">在IOS端安装</a></li></ul></li></ul></li></ul><h2 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h2><ul><li><p><strong>数字证书认证机构（CA），</strong></p><ul><li>是负责发放和管理数字证书的权威机构，</li><li>负责签发证书、认证证书、管理已颁发证书</li><li>CA 也拥有用户的证书（内含公钥）和私钥。</li><li>任何人都可以得到 CA 的证书（含公钥），用以验证 CA 所签发的证书。</li></ul></li><li><p><strong>用户证书</strong></p><ul><li>用户若欲获取证书，应先向 CA 提出申请，CA 判明申请者的身份后，为之分配一个公钥，并将该公钥与其身份信息绑定，为该整体签名，签名后的整体即为证书，发还给申请者。</li></ul></li><li><p><strong>鉴别用户证书的真伪</strong></p><ul><li>一个用户想鉴别另一个用户的证书的真伪，用 CA 的公钥对那个证书上的签字进行验证，一旦验证通过，该证书就被认为是有效的。</li></ul></li></ul><h2 id="安装mkcert" tabindex="-1"><a class="header-anchor" href="#安装mkcert" aria-hidden="true">#</a> 安装mkcert</h2><p><strong>安装mkcert工具</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mkcert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="生成用户证书" tabindex="-1"><a class="header-anchor" href="#生成用户证书" aria-hidden="true">#</a> 生成用户证书</h2><p><strong>生成证书:<code>cert.crt</code> 和 私钥:<code>cert-key.key</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkcert -cert-file ~/.ssl/cert.crt -key-file ~/.ssl/cert-key.key cn-zz-bgp-2.natfrp.cloud <span class="token number">43.249</span>.193.55 localhost <span class="token number">127.0</span>.0.1 ::1

<span class="token comment"># 输出结果:</span>
<span class="token comment"># Created a new local CA 💥</span>
<span class="token comment"># Note: the local CA is not installed in the system trust store.</span>
<span class="token comment"># Note: the local CA is not installed in the Firefox and/or Chrome/Chromium trust store.</span>
<span class="token comment"># Run &quot;mkcert -install&quot; for certificates to be trusted automatically ⚠️</span>
<span class="token comment"># </span>
<span class="token comment"># Created a new certificate valid for the following names 📜</span>
<span class="token comment">#  - &quot;cn-zz-bgp-2.natfrp.cloud&quot;</span>
<span class="token comment">#  - &quot;43.249.193.55&quot;</span>
<span class="token comment">#  - &quot;localhost&quot;</span>
<span class="token comment">#  - &quot;127.0.0.1&quot;</span>
<span class="token comment">#  - &quot;::1&quot;</span>
<span class="token comment"># </span>
<span class="token comment"># The certificate is at &quot;~/.ssl/cert.crt&quot; and the key at &quot;~/.ssl/cert-key.key&quot; ✅</span>
<span class="token comment"># </span>
<span class="token comment"># It will expire on 22 November 2024 🗓</span>
<span class="token comment"># </span>
<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置服务器安装用户证书(以code-server为例)</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vi ~/.config/code-server/config.yaml</span>
<span class="token comment"># code-server的配置文件:</span>
bind-addr: <span class="token number">0.0</span>.0.0:8080
auth: password
password: ???????????????????????
<span class="token comment"># cert 为刚刚生成的证书</span>
cert: /home/userName/.ssl/cert.crt
<span class="token comment"># cert-key 为刚刚生成的私钥</span>
cert-key: /home/userName/.ssl/cert-key.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时访问localhost将依然报错,因为没有为浏览器安装颁发者的证书</strong></p><p><img src="`+t+`" alt=""></p><h2 id="安装颁发者证书" tabindex="-1"><a class="header-anchor" href="#安装颁发者证书" aria-hidden="true">#</a> 安装颁发者证书</h2><h3 id="在pc端安装" tabindex="-1"><a class="header-anchor" href="#在pc端安装" aria-hidden="true">#</a> 在PC端安装</h3><p><strong>方法1:使用命令将颁发者mkcert机构证书添加到系统信任,同时安装到本机的火狐浏览器和谷歌浏览器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkcert <span class="token parameter variable">-install</span>

<span class="token comment"># 输出结果:</span>
<span class="token comment"># </span>
<span class="token comment"># The local CA is now installed in the system trust store! </span>
<span class="token comment"># 翻译:本地证书已经添加到到系统信任仓库</span>
<span class="token comment"># Warning: &quot;certutil&quot; is not available, so the CA can&#39;t be automatically installed in Firefox and/or Chrome/Chromium! ⚠️</span>
<span class="token comment"># 翻译:certutil(证书工具)不可用,所以证书无法自动安装到本机的浏览器</span>
<span class="token comment"># Install &quot;certutil&quot; with &quot;apt install libnss3-tools&quot; and re-run &quot;mkcert -install&quot; 👈</span>
<span class="token comment"># 翻译: 执行 &quot;apt install libnss3-tools&quot;来安装&quot;certutil&quot;,然后 重新执行 &quot;mkcert -install&quot;</span>

<span class="token comment"># 安装libnss3-tools</span>
<span class="token function">apt</span> <span class="token function">install</span> libnss3-tools
<span class="token comment"># 重新执行 &quot;mkcert -install&quot;</span>
mkcert <span class="token parameter variable">-install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时浏览器就能正常访问了</strong></p><p><img src="`+c+`" alt=""></p><p><strong>方法2:手动将颁发者mkcert机构证书手动添加到客户端的浏览器</strong><br><strong>查看 CA 证书的存放位置</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkcert <span class="token parameter variable">-CAROOT</span>
<span class="token comment"># 输出结果:</span>
<span class="token comment"># /root/.local/share/mkcert</span>

tree <span class="token variable"><span class="token variable">$(</span>mkcert <span class="token parameter variable">-CAROOT</span><span class="token variable">)</span></span>
<span class="token comment"># 输出结果: </span>
<span class="token comment"># /home/dyg/.local/share/mkcert</span>
<span class="token comment"># ├── rootCA-key.pem 颁发者机构的私钥</span>
<span class="token comment"># └── rootCA.pem 颁发者机构的证书</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>然后将上述颁发者mkcert机构证书文件<code>rootCA.pem</code>手动添加到pc端的浏览器中</strong></p><p><img src="`+i+'" alt=""></p><h3 id="在ios端安装" tabindex="-1"><a class="header-anchor" href="#在ios端安装" aria-hidden="true">#</a> 在IOS端安装</h3><p><strong>将颁发者mkcert机构证书手动添加到</strong></p><p><strong>安装前</strong><br><img src="'+l+'" alt=""></p><p><img src="'+r+'" alt=""></p><p><strong>安装中</strong><br><img src="'+o+'" alt=""><br><img src="'+d+'" alt=""><br><img src="'+m+'" alt=""><br><img src="'+p+'" alt=""><br><img src="'+b+'" alt=""><br><img src="'+u+'" alt=""></p><p><strong>安装后</strong><br><img src="'+v+'" alt=""></p><p><img src="'+h+'" alt=""></p>',32),g=[f];function _(A,E){return e(),n("div",null,g)}const C=s(k,[["render",_],["__file","mkcert生成自签https证书过程记录.html.vue"]]);export{C as default};
