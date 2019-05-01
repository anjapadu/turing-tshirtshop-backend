!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({"./index.js":function(e,t,r){"use strict";r.r(t),function(e){r("./src/lib/utils/index.js");var t=r("express"),n=r.n(t),i=r("cors"),a=r.n(i),o=r("body-parser"),p=r.n(o),c=r("morgan"),s=r.n(c),u=r("http"),d=r.n(u),l=r("./src/routes/graph/index.js"),y=r("./src/lib/security-middleware/index.js"),m=r("path"),h=r.n(m),f=n()();f.disable("x-powered-by"),f.use(p.a.urlencoded({extended:!0})),f.use(p.a.json()),f.use(s()(":method :url :status :res[content-length] - :response-time ms")),f.use("/images",n.a.static(h.a.join(e,"images/products")));var g={"http://localhost:4000":!0,"http://localhost:4000/":!0,"http://34.217.129.189:4000":!0,"http://34.217.129.189:4000/":!0},_={origin:function(e,t){if(g[e])return t(null,!0);t(new Error("ERR_CORS"))}};f.use(a()(_));var v=Object(y.a)({credentialsRequired:!1});f.use("/api",v),f.use("/",l.a),f.use(function(e,t,r,n){if(e)switch(e.message){case"AUTHORIZATION_ERROR":return r.status(401).json({code:403,message:"Authorization error"});case"ERR_CORS":return r.status(403).json({code:403,message:"Not allowed by CORS"});default:return r.status(e.status||500).json({code:e.status||500,message:e.message.charAt(0).toUpperCase()+e.message.slice(1)})}return n()}),d.a.createServer(f).listen(3035,function(){console.log("HTTP Server running on 3035")})}.call(this,"")},"./src/lib/crypt/index.js":function(e,t,r){"use strict";var n=r("cryptr"),i=r.n(n);r.d(t,"a",function(){return o}),r.d(t,"b",function(){return p});var a=new i.a("myTotalySecretKey"),o=function(e){var t;try{t=a.decrypt(e)}catch(e){throw new Error("invalid_token")}return t},p=function(e){return a.encrypt(e)}},"./src/lib/security-middleware/UnauthorizedError.js":function(e,t){function r(e,t){this.name="UnauthorizedError",this.message=t.message,Error.call(this,t.message),Error.captureStackTrace(this,this.constructor),this.code=e,this.status=401,this.inner=t}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,e.exports=r},"./src/lib/security-middleware/index.js":function(e,t,r){"use strict";var n=r("./src/lib/security-middleware/UnauthorizedError.js"),i=r.n(n),a=r("async"),o=r.n(a),p=r("express-unless"),c=r.n(p),s=r("./src/lib/crypt/index.js"),u=function(e,t,r){return r(null,!1)};t.a=function(e){var t,r,n=e.secret;r=n,"[object Function]"!==Object.prototype.toString.call(r)&&(t=n,n=function(e,r,n){return n(null,t)});var a=e.isRevoked||u,p=e.userProperty||e.requestProperty||"user",d=e.resultProperty,l=void 0===e.credentialsRequired||e.credentialsRequired,y=function(t,r,n){var c;if("OPTIONS"===t.method&&t.headers.hasOwnProperty("access-control-request-headers")&&!!~t.headers["access-control-request-headers"].split(",").map(function(e){return e.trim()}).indexOf("authorization"))return n();if(e.getToken&&"function"==typeof e.getToken)try{c=e.getToken(t)}catch(e){return n(e)}else if(t.headers&&t.headers.authorization){var u=t.headers.authorization.split(" ");if(2!=u.length)return n(new i.a("credentials_bad_format",{message:"Format is Authorization: Bearer [token]"}));var y=u[0],m=u[1];if(!/^Bearer$/i.test(y))return l?n(new i.a("credentials_bad_scheme",{message:"Format is Authorization: Bearer [token]"})):n();c=m}if(!c)return l?n(new i.a("credentials_required",{message:"No authorization token was found"})):n();o.a.waterfall([function(e){var t;try{t=Object(s.a)(c),t=JSON.parse(t),console.log("=======",{decoded:t}),e(null,t)}catch(t){e(new i.a("invalid_token",t))}},function(e,r){a(t,e,function(t,n){t?r(t):n?r(new i.a("revoked_token",{message:"The token has been revoked."})):r(null,e)})}],function(e,i){if(e)return n(e);d?r[d]=i:t[p]=i,n()})};return y.unless=c.a,y.UnauthorizedError=i.a,y}},"./src/lib/utils/index.js":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.operation.selectionSet.selections[0].selectionSet.selections.map(function(e){return t[e.name.value]?t[e.name.value]:e.name.value})},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.operation.selectionSet.selections[0].selectionSet.selections[0].selectionSet.selections.map(function(e){return t[e.name.value]?t[e.name.value]:e.name.value})}},"./src/routes/graph/index.js":function(e,t,r){"use strict";var n="/api",i={ide:!1,pretty:!0},a=r("graphql"),o=new a.GraphQLObjectType({name:"customer",description:"customer",fields:function(){return{name:{type:a.GraphQLString},email:{type:a.GraphQLString},credit_card:{type:a.GraphQLString},address_1:{type:a.GraphQLString},address_2:{type:a.GraphQLString},city:{type:a.GraphQLString},region:{type:a.GraphQLString},postal_code:{type:a.GraphQLString},country:{type:a.GraphQLString},shippingRegionId:{type:a.GraphQLInt},shippingRegionName:{type:a.GraphQLString},day_phone:{type:a.GraphQLString},eve_phone:{type:a.GraphQLString},mob_phone:{type:a.GraphQLString},token:{type:a.GraphQLString}}}}),p=r("sequelize"),c=r.n(p);r("dotenv").config();var s={username:process.env.DB_USER,password:process.env.DB_PASS,database:process.env.DB_DATABASE,host:process.env.DB_HOST,port:process.env.DB_PORT,dialect:"mysql"};console.log(s);var u=s,d=new p.Sequelize({username:u.username,port:u.port,password:u.password,database:u.database,host:u.host,dialect:u.dialect});console.info("SETUP -- CONNECTTION TO DATABASE..."),d.authenticate().then(function(){console.info("=====DATABASE CONNECTED======")}).catch(function(e){console.error("======UNABLE TO CONNECT TO DATABASE=======",e)});var l=d,y={products:l.import("products",function(e,t){var r=e.define("product",{id:{type:t.INTEGER,primaryKey:!0,field:"product_id",autoIncrement:!0},name:{type:t.STRING},description:{type:t.STRING},price:{type:t.DECIMAL},discounted_price:{type:t.DECIMAL},image:{type:t.STRING},image_2:{type:t.STRING},thumbnail:{type:t.STRING},display:{type:t.SMALLINT}},{tableName:"product",timestamps:!1});return r.associate=function(e){e.products.belongsToMany(e.categories,{through:e.product_category,foreignKey:"product_id"}),e.products.belongsToMany(e.attribute_value,{foreignKey:"product_id",through:e.product_attribute})},r}),categories:l.import("categories",function(e,t){var r=e.define("category",{id:{type:t.INTEGER,primaryKey:!0,field:"category_id",autoIncrement:!0},department_id:{type:t.INTEGER},name:{type:t.STRING},description:{type:t.STRING}},{tableName:"category",timestamps:!1});return r.associate=function(e){e.categories.belongsToMany(e.products,{through:e.product_category,foreignKey:"category_id"}),e.categories.belongsTo(e.departments,{keyTarget:"department_id",foreignKey:"department_id"})},r}),departments:l.import("departments",function(e,t){var r=e.define("department",{id:{type:t.INTEGER,primaryKey:!0,field:"department_id",autoIncrement:!0},name:{type:t.STRING},description:{type:t.STRING}},{tableName:"department",timestamps:!1});return r.associate=function(e){e.departments.hasMany(e.categories,{foreignKey:"department_id",targetKey:"department_id"})},r}),product_category:l.import("product_category",function(e,t){return e.define("product_category",{product_id:{type:t.INTEGER,primaryKey:!0},category_id:{type:t.INTEGER,primaryKey:!0}},{tableName:"product_category",timestamps:!1})}),attribute:l.import("attribute",function(e,t){return e.define("attribute",{id:{type:t.INTEGER,primaryKey:!0,field:"attribute_id",autoIncrement:!0},name:{type:t.STRING}},{tableName:"attribute",timestamps:!1})}),attribute_value:l.import("attribute_value",function(e,t){return e.define("attribute_value",{id:{type:t.INTEGER,primaryKey:!0,field:"attribute_value_id",autoIncrement:!0},attribute_id:{type:t.INTEGER},value:{type:t.STRING}},{tableName:"attribute_value",timestamps:!1})}),product_attribute:l.import("product_attribute",function(e,t){return e.define("product_attribute",{product_id:{type:t.INTEGER,primaryKey:!0},attribute_value_id:{type:t.INTEGER,primaryKey:!0}},{tableName:"product_attribute",timestamps:!1})}),orders:l.import("orders",function(e,t){var r=e.define("orders",{id:{type:t.INTEGER,primaryKey:!0,field:"order_id",autoIncrement:!0},total_amount:{type:t.DECIMAL},created_on:{type:t.DATE},shipped_on:{type:t.DATE},status:{type:t.INTEGER},comments:{type:t.STRING},customer_id:{type:t.INTEGER},auth_code:{type:t.STRING},reference:{type:t.STRING},shipping_id:{type:t.INTEGER},tax_id:{type:t.INTEGER}},{tableName:"orders",timestamps:!1});return r.associate=function(e){e.orders.hasMany(e.order_detail,{foreignKey:"order_id",targetKey:"order_id"})},r}),order_detail:l.import("order_detail",function(e,t){var r=e.define("order_detail",{id:{type:t.INTEGER,primaryKey:!0,field:"item_id",autoIncrement:!0},order_id:{type:t.INTEGER},product_id:{type:t.INTEGER},attributes:{type:t.STRING},product_name:{type:t.STRING},quantity:{type:t.INTEGER},unit_cost:{type:t.DECIMAL}},{tableName:"order_detail",timestamps:!1});return r.associate=function(e){e.order_detail.belongsTo(e.orders)},r}),customer:l.import("customer",function(e,t){var r=e.define("customer",{id:{type:t.INTEGER,primaryKey:!0,field:"customer_id",autoIncrement:!0},name:{type:t.STRING},email:{type:t.STRING},password:{type:t.STRING},credit_card:{type:t.STRING},address_1:{type:t.STRING},address_2:{type:t.STRING},city:{type:t.STRING},region:{type:t.STRING},postal_code:{type:t.STRING},country:{type:t.STRING},shipping_region_id:{type:t.INTEGER},day_phone:{type:t.STRING},eve_phone:{type:t.STRING},mob_phone:{type:t.STRING}},{tableName:"customer",timestamps:!1});return r.associate=function(e){e.customer.hasOne(e.shipping_region,{foreignKey:"shipping_region_id"})},r}),shipping_region:l.import("shipping_region",function(e,t){var r=e.define("shipping_region",{id:{type:t.INTEGER,primaryKey:!0,field:"shipping_region_id",autoIncrement:!0},shipping_region:{type:t.STRING}},{tableName:"shipping_region",timestamps:!1});return r.associate=function(e){e.shipping_region.belongsTo(e.customer,{foreignKey:"shipping_region_id"}),e.shipping_region.hasMany(e.shipping,{foreignKey:"shipping_region_id",targetKey:"shipping_region_id",as:"shipping"})},r}),review:l.import("review",function(e,t){var r=e.define("review",{id:{type:t.INTEGER,primaryKey:!0,field:"review_id",autoIncrement:!0},customer_id:{type:t.INTEGER},product_id:{type:t.INTEGER},review:{type:t.STRING},rating:{type:t.INTEGER},created_on:{type:t.DATE}},{tableName:"review",timestamps:!1});return r.associate=function(e){e.review.hasOne(e.customer,{foreignKey:"customer_id"}),e.review.hasOne(e.products,{foreignKey:"product_id"})},r}),shipping:l.import("shipping",function(e,t){return e.define("shipping",{id:{type:t.INTEGER,primaryKey:!0,field:"shipping_id",autoIncrement:!0},shipping_type:{type:t.STRING},shipping_cost:{type:t.DECIMAL},shipping_region_id:{type:t.INTEGER}},{tableName:"shipping",timestamps:!1})})};Object.keys(y).forEach(function(e){"associate"in y[e]&&y[e].associate(y)}),y.sequelize=l,y.Sequelize=c.a;var m=y,h=r("sha1"),f=r.n(h),g=r("./src/lib/utils/index.js"),_=r("./src/lib/crypt/index.js");function v(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e,t,r,n,i,a,o){try{var p=e[a](o),c=p.value}catch(e){return void r(e)}p.done?t(c):Promise.resolve(c).then(n,i)}function G(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){b(a,n,i,o,p,"next",e)}function p(e){b(a,n,i,o,p,"throw",e)}o(void 0)})}}var S={shippingRegionName:[m.Sequelize.literal("`shipping_region`.`shipping_region`"),"shippingRegionName"],shippingRegionId:[m.Sequelize.literal("`shipping_region`.`shipping_region_id`"),"shippingRegionId"]},I=function(){var e=G(regeneratorRuntime.mark(function e(t,r,n,i){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(g.a)(i,S),e.next=3,m.customer.findAll({attributes:a,include:[{attributes:[],model:m.shipping_region}],raw:!0});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t,r,n,i){return e.apply(this,arguments)}}(),w=function(){var e=G(regeneratorRuntime.mark(function e(t,r,n,i){var a,o,p,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(g.a)(i,S).filter(function(e){return"token"!=e}),o=r.email,p=r.password,c=r.isGoogle,e.next=4,m.customer.findOne({attributes:[].concat(v(a),["password","id"]),where:{email:o},include:[{attributes:[],model:m.shipping_region}],raw:!0});case 4:if(s=e.sent){e.next=7;break}throw new Error("USER_NOT_EXIST");case 7:if(f()(p)!==s.password&&!c){e.next=10;break}return s.token=Object(_.b)(JSON.stringify({id:s.id,scope:"user",expiration:null})),e.abrupt("return",s);case 10:throw new Error("WRONG_PASS");case 11:case"end":return e.stop()}},e)}));return function(t,r,n,i){return e.apply(this,arguments)}}(),L=function(){var e=G(regeneratorRuntime.mark(function e(t,r,n,i){var a,o,p,c,s,u,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.firstname,o=r.lastname,p=r.email,c=r.password,s=r.isGoogle,void 0!==s&&s,e.next=3,m.customer.count({where:{email:p},raw:!0});case 3:if(!(e.sent>0)){e.next=6;break}throw new Error("USER_EXISTS");case 6:return e.prev=6,e.next=9,m.customer.create({name:"".concat(a," ").concat(o),email:p,password:f()(c)},{raw:!0});case 9:return u=e.sent,(d=u.get({plain:!0})).token=Object(_.b)(JSON.stringify({id:d.id,scope:"user",expiration:null})),e.abrupt("return",d);case 15:throw e.prev=15,e.t0=e.catch(6),new Error("INSERT_ERROR");case 18:case"end":return e.stop()}},e,null,[[6,15]])}));return function(t,r,n,i){return e.apply(this,arguments)}}(),N={},T={};T.registerCustomer={type:o,args:{firstname:{type:Object(a.GraphQLNonNull)(a.GraphQLString)},lastname:{type:Object(a.GraphQLNonNull)(a.GraphQLString)},email:{type:Object(a.GraphQLNonNull)(a.GraphQLString)},password:{type:Object(a.GraphQLNonNull)(a.GraphQLString)},isGoogle:{type:a.GraphQLBoolean}},resolve:L},N.customers={type:Object(a.GraphQLList)(o),resolve:I},N.customerLogin={type:o,args:{email:{type:Object(a.GraphQLNonNull)(a.GraphQLString)},password:{type:Object(a.GraphQLNonNull)(a.GraphQLString)},isGoogle:{type:a.GraphQLBoolean}},resolve:w};var E=new a.GraphQLObjectType({name:"products",description:"products",fields:function(){return{id:{type:a.GraphQLInt},name:{type:a.GraphQLString},description:{type:a.GraphQLString},price:{type:a.GraphQLFloat},discounted_price:{type:a.GraphQLFloat},image:{type:a.GraphQLString},image_2:{type:a.GraphQLString},thumbnail:{type:a.GraphQLString},display:{type:a.GraphQLInt},categoryName:{type:a.GraphQLString},categoryId:{type:a.GraphQLInt},departmentId:{type:a.GraphQLInt},departmentName:{type:a.GraphQLString},colors:{type:a.GraphQLString},sizes:{type:a.GraphQLString}}}}),R=new a.GraphQLInputObjectType({name:"DataPage",fields:function(){return{limit:{type:a.GraphQLInt},offset:{type:a.GraphQLInt}}}}),Q=r("node-cache"),O=r.n(Q);function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var j=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cache=new O.a({stdTTL:t,checkperiod:.2*t,useClones:!1})}var t,r,n;return t=e,(r=[{key:"get",value:function(e,t){var r=this,n=this.cache.get(e);return n?Promise.resolve(n):t().then(function(t){return r.cache.set(e,t),t})}},{key:"del",value:function(e){this.cache.del(e)}},{key:"delStartWith",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t=this.cache.keys(),r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var p=a.value;0===p.indexOf(e)&&this.del(p)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"flush",value:function(){this.cache.flushAll()}}])&&x(t.prototype,r),n&&x(t,n),e}())(1800);function A(e,t,r,n,i,a,o){try{var p=e[a](o),c=p.value}catch(e){return void r(e)}p.done?t(c):Promise.resolve(c).then(n,i)}function q(){var e;return e=regeneratorRuntime.mark(function e(t,r,n,i){var a,o,p,c,s,u,d,l,y,h,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"(SELECT  group_concat(UPPER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 1 group by av.attribute_id)","(SELECT  group_concat(LOWER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 2 group by av.attribute_id)",a=r.categoryId,o=r.departmentId,p=r.paging,c=r.id,s=r.notId,u=r.autoComplete,d={categoryName:[m.Sequelize.literal("`categories`.`name`"),"categoryName"],categoryId:[m.Sequelize.literal("`categories`.`category_id`"),"categoryId"],departmentId:[m.Sequelize.literal("`categories->department`.`department_id`"),"departmentId"],departmentName:[m.Sequelize.literal("`categories->department`.`name`"),"departmentName"],colors:[m.Sequelize.literal("(SELECT  group_concat(LOWER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 2 group by av.attribute_id)"),"colors"],sizes:[m.Sequelize.literal("(SELECT  group_concat(UPPER(av.`value`)) size   from attribute a join attribute_value av ON a.attribute_id = av.attribute_id join product_attribute pa on (pa.attribute_value_id=av.attribute_value_id) where pa.product_id = `categories->product_category`.`product_id` and a.attribute_id = 1 group by av.attribute_id)"),"sizes"]},l=Object(g.b)(i,d),!u){e.next=11;break}return e.next=9,m.products.findAndCountAll({attributes:l,where:m.Sequelize.literal("\n                ".concat("`product`.`display` IN (0, 1,2,3,4)","   \n                ",c?" AND `product`.`product_id` = ".concat(c):"","\n                ").concat(o?" AND `categories->department`.`department_id` = ".concat(o):"","\n                ").concat(a?" AND categories.category_id = ".concat(a):"","\n                ").concat(s?" AND `product`.`product_id` != ".concat(s):"","\n                ").concat(u?" AND `product`.`name` LIKE '%".concat(u,"%'"):"","\n                ")),subQuery:!1,include:[{nested:!1,model:m.categories,attributes:["name","category_id"],as:"categories",include:[{nested:!1,as:"department",attributes:["name","department_id"],model:m.departments}]}],limit:p?p.limit:null,offset:p?p.offset:null,raw:!0});case 9:return y=e.sent,e.abrupt("return",{data:y.rows,count:y.count});case 11:return h=c?"product_".concat(c):"product_c".concat(a||"","_d").concat(o||"","_o").concat(p?p.offset:""),e.next=14,j.get(h,function(){return m.products.findAndCountAll({attributes:l,where:m.Sequelize.literal("\n                ".concat("`product`.`display` IN (0, 1,2,3,4)","   \n                ",c?" AND `product`.`product_id` = ".concat(c):"","\n                ").concat(o?" AND `categories->department`.`department_id` = ".concat(o):"","\n                ").concat(a?" AND categories.category_id = ".concat(a):"","\n                ").concat(s?" AND `product`.`product_id` != ".concat(s):"","\n                ").concat(u?" AND `product`.`name` LIKE '%".concat(u,"%'"):"","\n                ")),subQuery:!1,include:[{nested:!1,model:m.categories,attributes:["name","category_id"],as:"categories",include:[{nested:!1,as:"department",attributes:["name","department_id"],model:m.departments}]}],limit:p?p.limit:null,offset:p?p.offset:null,raw:!0})});case 14:return f=e.sent,e.abrupt("return",{data:f.rows,count:f.count});case 18:e.prev=18,e.t0=e.catch(0),console.log({e:e.t0});case 21:case"end":return e.stop()}},e,null,[[0,18]])}),(q=function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){A(a,n,i,o,p,"next",e)}function p(e){A(a,n,i,o,p,"throw",e)}o(void 0)})}).apply(this,arguments)}var k,P={};P.products={type:(k=E,new a.GraphQLObjectType({name:"findCount_".concat(k),fields:function(){return{data:{type:Object(a.GraphQLList)(k)},count:{type:a.GraphQLInt}}}})),args:{categoryId:{type:a.GraphQLInt},departmentId:{type:a.GraphQLInt},paging:{type:R},id:{type:a.GraphQLInt},notId:{type:a.GraphQLInt},autoComplete:{type:a.GraphQLString}},resolve:function(e,t,r,n){return q.apply(this,arguments)}};var D=new a.GraphQLObjectType({name:"categories",description:"categories",fields:function(){return{id:{type:a.GraphQLInt},name:{type:a.GraphQLString},description:{type:a.GraphQLString}}}}),z=new a.GraphQLObjectType({name:"departments",description:"departments",fields:function(){return{id:{type:a.GraphQLInt},name:{type:a.GraphQLString},description:{type:a.GraphQLString},categories:{type:Object(a.GraphQLList)(D)}}}});function K(e,t,r,n,i,a,o){try{var p=e[a](o),c=p.value}catch(e){return void r(e)}p.done?t(c):Promise.resolve(c).then(n,i)}function C(){var e;return e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.departments.findAll({include:[{model:m.categories}]});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}),(C=function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){K(a,n,i,o,p,"next",e)}function p(e){K(a,n,i,o,p,"throw",e)}o(void 0)})}).apply(this,arguments)}var M={};M.departments={type:Object(a.GraphQLList)(z),resolve:function(){return C.apply(this,arguments)}};var F=new a.GraphQLObjectType({name:"shipping",description:"shipping",fields:function(){return{id:{type:a.GraphQLInt},shipping_type:{type:a.GraphQLString},shipping_cost:{type:a.GraphQLFloat},shipping_region_id:{type:a.GraphQLInt}}}}),B=new a.GraphQLObjectType({name:"shipping_region",description:"shipping_region",fields:function(){return{id:{type:a.GraphQLInt},shipping_region:{type:a.GraphQLString},shipping:{type:Object(a.GraphQLList)(F)}}}});function U(e,t,r,n,i,a,o){try{var p=e[a](o),c=p.value}catch(e){return void r(e)}p.done?t(c):Promise.resolve(c).then(n,i)}function Y(){var e;return e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.shipping_region.findAll({include:[{model:m.shipping,as:"shipping"}],order:[["id","ASC"]]});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}),(Y=function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){U(a,n,i,o,p,"next",e)}function p(e){U(a,n,i,o,p,"throw",e)}o(void 0)})}).apply(this,arguments)}var H={};H.shippingRegion={type:Object(a.GraphQLList)(B),resolve:function(){return Y.apply(this,arguments)}};var W=new a.GraphQLObjectType({name:"orders",description:"orders",fields:function(){return{id:{type:a.GraphQLInt},total_amount:{type:a.GraphQLFloat},created_on:{type:a.GraphQLString},shipped_on:{type:a.GraphQLString},status:{type:a.GraphQLInt},comments:{type:a.GraphQLString},customer_id:{type:a.GraphQLInt},auth_code:{type:a.GraphQLString},reference:{type:a.GraphQLString},shipping_id:{type:a.GraphQLInt},tax_id:{type:a.GraphQLInt}}}});function J(e,t,r,n,i,a,o){try{var p=e[a](o),c=p.value}catch(e){return void r(e)}p.done?t(c):Promise.resolve(c).then(n,i)}function $(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){J(a,n,i,o,p,"next",e)}function p(e){J(a,n,i,o,p,"throw",e)}o(void 0)})}}function X(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Z=r("stripe"),V=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stripe=Z("sk_test_atNKmqivQ5ODRTAmIleFFkYi00NTfdGK5h")}var t,r,n;return t=e,(r=[{key:"createPaymentMethod",value:function(){var e=$(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.stripe.paymentMethods.create(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error("WRONG_CARD");case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},{key:"createPaymentIntent",value:function(){var e=$(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.stripe.paymentIntents.create(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),console.log(e.t0),new Error("PAYMENT_FAILED");case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},{key:"confirmPayment",value:function(){var e=$(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.stripe.paymentIntents.confirm(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),console.log(e.t0),new Error("PAYMENT_FAILED");case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()}])&&X(t.prototype,r),n&&X(t,n),e}(),ee=r("nodemailer"),te=r.n(ee),re=r("moment"),ne=r.n(re);function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){ae(e,t,r[t])})}return e}function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e,t,r,n,i,a,o){try{var p=e[a](o),c=p.value}catch(e){return void r(e)}p.done?t(c):Promise.resolve(c).then(n,i)}function pe(){var e;return e=regeneratorRuntime.mark(function e(t,r,n,i){var a,o,p,c,s,u,d,l,y,h,f,g,_,v,b,G,S,I,w,L,N,T,E,R,Q,O,x,j,A,q;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.user){e.next=2;break}throw new Errow("AUTHORIZATION_ERROR");case 2:return a=r.address_1,o=r.address_2,p=void 0===o?"":o,c=r.city,s=r.country,u=r.name,d=r.postal_code,l=r.region,y=r.shipping_region_id,h=r.total_amount,r.comments,f=r.detail,g=r.shipping_id,r.tax_id,r.customer_id,_=r.card,v=_.number,b=_.exp_month,G=_.exp_year,S=_.cvc,I=new V,e.next=7,I.createPaymentMethod({type:"card",card:{number:v,exp_month:parseInt(b),exp_year:parseInt(G),cvc:S}});case 7:return w=e.sent,L={amount:h.toFixed(2).replace(/\,|\./g,""),currency:"usd",payment_method_types:["card"],payment_method:w.id},e.next=11,I.createPaymentIntent(L);case 11:return N=e.sent,e.next=14,I.confirmPayment(N.id);case 14:if("succeeded"!==(T=e.sent).status){e.next=36;break}return e.next=18,m.orders.create({total_amount:h,created_on:m.Sequelize.fn("NOW"),customer_id:n.user.id,shipping_id:g,reference:T.id},{raw:!0});case 18:return E=e.sent,R=E.get({plain:!0}),e.next=22,m.order_detail.bulkCreate(f.map(function(e){return ie({},e,{oreder_id:R.id})}),{returning:!0});case 22:return Q=e.sent,O=te.a.createTransport({service:"gmail",auth:{user:"yancetest2019@gmail.com",pass:"ferret12345"}}),e.next=26,m.customer.findOne({attributes:["email"],where:{id:n.user.id},raw:!0});case 26:if(x=e.sent,j=x.email,A=f.map(function(e){return"<li>".concat(e.product_name," x ").concat(e.quantity," = $").concat(parseInt(e.quantity)*parseFloat(e.unit_cost),"</li>")}).join(""),q={from:"lyance_test@gmail.com",to:j,subject:"Your order from ".concat(ne()().format("DD-MM-YYYY @ HH:mm")),html:"<p>Order confirmed!!!</p>\n                <ul>\n                ".concat(A,"\n                </ul>\n            <p>Total: $ ").concat(h,"</p>\n                ")},m.customer.update({address_1:a,address_2:p,city:c,country:s,name:u,postal_code:d,region:l,shipping_region_id:y},{where:{id:n.user.id}}),O.sendMail(q,function(e,t){e?console.log(e):console.log(t)}),!Q){e.next=34;break}return e.abrupt("return",{id:R.id});case 34:e.next=37;break;case 36:throw new Error("PAYMENT_FAILED");case 37:case"end":return e.stop()}},e)}),(pe=function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){oe(a,n,i,o,p,"next",e)}function p(e){oe(a,n,i,o,p,"throw",e)}o(void 0)})}).apply(this,arguments)}var ce,se=r("graphql-type-json"),ue=r.n(se),de=new a.GraphQLObjectType({name:"order_detail",description:"order_detail",fields:function(){return{product_id:{type:a.GraphQLInt},attributes:{type:a.GraphQLString},product_name:{type:a.GraphQLString},quantity:{type:a.GraphQLInt},unit_cost:{type:a.GraphQLFloat}}}});function le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ye={};function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){he(e,t,r[t])})}return e}function he(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}ye.order={type:W,args:(ce={address_1:{type:a.GraphQLString},address_2:{type:a.GraphQLString},city:{type:a.GraphQLString},country:{type:a.GraphQLString},name:{type:a.GraphQLString},postal_code:{type:a.GraphQLString},region:{type:a.GraphQLString},shipping_region_id:{type:a.GraphQLInt},total_amount:{type:a.GraphQLFloat},comments:{type:a.GraphQLString},detail:{type:ue.a},shipping_id:{type:a.GraphQLInt},tax_id:{type:a.GraphQLInt},customer_id:{type:a.GraphQLInt}},le(ce,"detail",{type:Object(a.GraphQLList)(new a.GraphQLInputObjectType({name:"input_detail_order",fields:de.getFields()}))}),le(ce,"card",{type:new a.GraphQLInputObjectType({name:"input_card_order",fields:new a.GraphQLObjectType({name:"cardType",description:"",fields:function(){return{number:{type:a.GraphQLString},exp_month:{type:a.GraphQLString},exp_year:{type:a.GraphQLString},cvc:{type:a.GraphQLString}}}}).getFields()})}),ce),resolve:function(e,t,r,n){return pe.apply(this,arguments)}};var fe=new a.GraphQLObjectType({name:"query",description:"...",fields:function(){return me({},N,P,M,H)}}),ge=new a.GraphQLObjectType({name:"mutations",description:"...",fields:function(){return me({},T,ye)}}),_e=new a.GraphQLSchema({query:fe,mutation:ge}),ve=r("express"),be=r("express-graphql"),Ge=i,Se=Ge.ide,Ie=Ge.pretty,we=n,Le=ve.Router();console.info("GRAPHQL STARTING..."),Le.use(we,function(e,t){be({schema:_e,graphiql:Se,pretty:Ie,formatError:function(e){return e.message}})(e,t)});t.a=Le},0:function(e,t,r){r("@babel/polyfill"),e.exports=r("./index.js")},"@babel/polyfill":function(e,t){e.exports=require("@babel/polyfill")},async:function(e,t){e.exports=require("async")},"body-parser":function(e,t){e.exports=require("body-parser")},cors:function(e,t){e.exports=require("cors")},cryptr:function(e,t){e.exports=require("cryptr")},dotenv:function(e,t){e.exports=require("dotenv")},express:function(e,t){e.exports=require("express")},"express-graphql":function(e,t){e.exports=require("express-graphql")},"express-unless":function(e,t){e.exports=require("express-unless")},graphql:function(e,t){e.exports=require("graphql")},"graphql-type-json":function(e,t){e.exports=require("graphql-type-json")},http:function(e,t){e.exports=require("http")},moment:function(e,t){e.exports=require("moment")},morgan:function(e,t){e.exports=require("morgan")},"node-cache":function(e,t){e.exports=require("node-cache")},nodemailer:function(e,t){e.exports=require("nodemailer")},path:function(e,t){e.exports=require("path")},sequelize:function(e,t){e.exports=require("sequelize")},sha1:function(e,t){e.exports=require("sha1")},stripe:function(e,t){e.exports=require("stripe")}});