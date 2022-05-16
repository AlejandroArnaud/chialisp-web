"use strict";(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[2291],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=i,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5309:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"glossary",title:"The Great Chia Glossary"},l=void 0,u={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"The Great Chia Glossary",description:"This guide will act as a glossary for many of the concepts utilized in Chia.",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"The Great Chia Glossary"},sidebar:"someSidebar",previous:{title:"10 - Optimization",permalink:"/docs/optimization"},next:{title:"CLVM Reference",permalink:"/docs/ref/clvm"}},c=[],h={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will act as a glossary for many of the concepts utilized in Chia.\nIf you are familiar with how Bitcoin transactions work, a lot of this will be familiar."),(0,r.kt)("hr",null),(0,r.kt)("a",{id:"coin",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Coin (TXO/transaction output)")," - A coin stores value. All coins are generated as the output of a transaction or a coinbase reward or fee target. A coin is spent exactly once, allowing its value to go into other coins, and is then permanently destroyed. Each unspent coin is locked with a Chialisp program which is that coin\u2019s puzzle, and whoever has the information to solve that puzzle is the person who can spend that coin. The most basic puzzle has a public key and accepts a solution which contains a list of conditions signed by the corresponding private key, so only the owner of the private key can unlock the coin and spend it.")),(0,r.kt)("a",{id:"unspent-coin",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unspent Coin/Coin Set (UTXO/unspent transaction output)")," - A coin which has been created but not yet spent and hence is storing value.\nUnspents (UTXO set/unspent transaction output set) - This is the set of all unspent coins on the network. It is used to check if a transaction is valid, acting as a lookup for the puzzles. It maps a coin ID to a birthdate in blockheight. A transaction must contain a reveal of the information used to calculate the ID in order for it to be possible to validate because the unspents doesn\u2019t contain that information, only hashes which can be used to validate it.")),(0,r.kt)("a",{id:"coin-id",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Coin ID/CoinName (TXO ID/transaction output ID)")," - The ID of a coin in Chia is generated by hashing the primary input ID, puzzle hash, and amount concatenated in that order. This is very different from Bitcoin which uses much more data to form the TXO ID, restricting what smart coins are capable of. (See also: ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SegWit"},"SegWit"),")")),(0,r.kt)("a",{id:"coin-record",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Coin Record")," - The format in which a coin is actually stored in the blockchain database and returned via the full node's RPC API.  Contains the fundamental information about the coin as well as information about when it was confirmed and spent.")),(0,r.kt)("a",{id:"primary-input-parent",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primary Input/Parent")," - When a coin is created the coin that was used as input in the transaction is designated as the primary input. This is used to create the coin ID. If more that one coin is used up as an input in a transaction then one of the coins is designated the primary input, and the others simply reinforce the transaction.")),(0,r.kt)("a",{id:"spend-coinsolution",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spend/CoinSolution")," - A spend is a reveal of a coin's ID, along with the full puzzle code, and a solution to be ran with the puzzle. The result of a spend is determined by the returned conditions after running the puzzle with the solution.")),(0,r.kt)("a",{id:"spend-bundle",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spend Bundle")," - A spend bundle is a collection of spends grouped together with an aggregated signature to be sent to the network.")),(0,r.kt)("a",{id:"fees",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fees")," - The difference between the sum of the amounts of new coins created in a spend and the sum of the amounts of the coins being spent in the same spend. All of this excess value is given to the farmer as part of their farming rewards.")),(0,r.kt)("a",{id:"mempool",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mempool")," - The set of transactions that are pending in a full node to be farmed into a block.  The full node will presumably try to optimize the transactions it includes in a block in order to extract the most fees.")),(0,r.kt)("a",{id:"chialisp",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chialisp")," - Chialisp is the Turing-complete functional language which the puzzles for spending coin are programmed in. For more information see our ",(0,r.kt)("a",{parentName:"li",href:"/docs/"},"CLVM Guide"))),(0,r.kt)("a",{id:"puzzle",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Puzzle (Scriptpubkey)")," - A Chialisp program which specifies the behavior of a coin when it is spent. A puzzle can either reject a solution or output a set of conditions.")),(0,r.kt)("a",{id:"solution",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Solution (Scriptsig)")," - This is some Chialisp which is passed to the puzzle for evaluation when a transaction is submitted. For more information about how transactions work, and how solutions can generate new coins check out this ",(0,r.kt)("a",{parentName:"li",href:"/docs/coins_spends_and_wallets"},"guide"))),(0,r.kt)("a",{id:"clvm",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CLVM")," - The CLVM is the Chialisp Virtual Machine which is the sandboxed environment that puzzles and solutions are run in. The CLVM only runs the compiled minimal version of Chialisp, though a compiler can convert the higher level Chialisp to the compiled minimal version. See more about that ",(0,r.kt)("a",{parentName:"li",href:"/docs/high_level_lang"},"here"))),(0,r.kt)("a",{id:"aggregated-signature",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Aggregated Signature/AggSig")," - Aggregated Signatures allow us to condense multiple signatures into a single aggregated signature, such that if we know a public key and value we can verify if it exists inside of the single aggregate. This uses BLS non-interactive aggregation.")),(0,r.kt)("a",{id:"augmented-signatures",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Augmented Signatures")," - Augmented Signatures require prepending the public key before the message, which means these signatures are guaranteed to be secure in aggregation, since the public key cannot be specifically crafted for a message (rogue public key)")),(0,r.kt)("a",{id:"conditions",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Conditions/Op Constraints")," - Conditions are returned by the puzzle when it\u2019s passed the solution. If all of the returned conditions are met then a transaction is valid.")),(0,r.kt)("a",{id:"transaction-generator",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transaction Generator")," - A CLVM program stored in a block that runs each puzzle and solution that was included and returns an aggregation of all of the conditions that were output as a result.\nWhen full nodes validate the blockchain, they run the transaction generator and validate all of the spends as one large spend.")),(0,r.kt)("a",{id:"wallet",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wallet")," - Software written to track and interact with coins. Chia uses Hierarchical Deterministic Wallets (HD Wallets). This means that they can generate many different public keys that are all valid and verifiable as unique to that wallet. A wallet contains a coin if it possesses the information necessary to unlock that coin and create a transaction which spends it.")),(0,r.kt)("a",{id:"smart-coin",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smart Coin"),' - A smart coin is a coin locked up with a specialized Chialisp puzzle that enables complex blockchain interactions. All coins in Chia are smart coins but this usually stands in for the term "smart contract" that most developers are familiar with.')),(0,r.kt)("a",{id:"chia-asset-tokens",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chia Asset Tokens")," - ",(0,r.kt)("em",{parentName:"li"},'(Formerly named "Coloured Coins")')," Chia Asset Tokens (CATs) are a special kind of chia coin which are created by users. A CAT is a uniquely marked subset of chia which can't be forged and can be linked to other assets. The Chia Asset Token standard is called ",(0,r.kt)("em",{parentName:"li"},"CAT1")," and you can read more about it ",(0,r.kt)("a",{parentName:"li",href:"https://www.chia.net/2021/09/23/chia-token-standard-naming.en.html"},"here"),".")),(0,r.kt)("a",{id:"authorized-payees",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authorized Payees")," - Authorized Payees is a smart coin that means that Wallet A can give Wallet B some money, but Wallet B is only allowed to spend that money in ways that Wallet A has explicitly authorized.")),(0,r.kt)("a",{id:"decentralized-id",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Decentralized ID")," - A decentralized ID is a smart coin that enables a wallet to act as an ID which can create messages to other IDs. Based on the work of the ",(0,r.kt)("a",{parentName:"li",href:"https://identity.foundation/"},"identity foundation"),".")),(0,r.kt)("a",{id:"currying",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currying")," - A Chialisp technique in which solution values are pre-committed to before a puzzle is hashed.\nExtremely useful and part of almost all Chialisp puzzles.")),(0,r.kt)("a",{id:"outer-inner-puzzles",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outer/Inner Puzzles"),' - A concept which describes the common design pattern of Chialisp puzzles in which an "outer" puzzle modifies the output of a distinct "inner" puzzle.')),(0,r.kt)("a",{id:"delegated-puzzle",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delegated Puzzle")," - A puzzle that is passed to another puzzle as an argument and which is used to generate the final output conditions of the puzzle it is being passed to. This is used to give ultimate control of how the coin is spent to the solver as long as they meet some other criteria first.")),(0,r.kt)("a",{id:"singleton",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Singleton")," - A singleton is a coin that is verifiably unique. Similar to (but more powerful than) NFTs, a singleton cannot be copied, duplicated, or recreated if it is destroyed.\nIt is a common outer puzzle for things like DIDs, NFTs, or the pooling protocol.")),(0,r.kt)("a",{id:"pooling-protocol",className:"glossary-anchor","aria-hidden":"true"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pooling Protocol")," - A collective term for the network protocol and Chialisp puzzles that enable pooling on the Chia network.  You can see a breakdown of the Chialisp section ",(0,r.kt)("a",{parentName:"li",href:"/docs/puzzles/pooling"},"here"),".")))}d.isMDXComponent=!0}}]);