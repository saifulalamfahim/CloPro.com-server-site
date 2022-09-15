#1..Create Folder Structure
        1/create root folder as CloPro.com
        2/add frontend and backend folder
        3/create src folder in frontend
        4/create index.html with heading CloPro.com in src
        4/run npm init in frontend folder
        5/npm install live-server
        6/add start command as live-server src --verbose
        7/run npm start
        8/check result



#2..Design Website
        9/create style.css
        10/link style.css to index.html
        11/create div.grid-container
        12/create header, main and footer
        13/style html, body
        14/style grid-container, header, main and footer

        
    #3...Create Static Home Screen
        15/create ul.products
        16/create li
        17/create div.product
        18/add .product-image, .product-name, .product-brand, .product-price
        19/style ul.products and internal divs
        20/duplicate 2 times to show 3 products


#4..Render Dynamic Home Screen
        21/create data.js
        22/export an array of 6 products
        23/create screens/HomeScreen.js
        24/export HomeScreen as an object with render() method
        25/implement render()
        26/import data.js
        27/return products mapped to lis inside an ul
        28/create app.js
        29/link it to index.html as module
        30/set main id to main-container
        31/create router() function
        32/set main_container innerHTML to HomeScreen.render()
        33/set load event of window to router() function



#5..Build Url Router
        34/create routes as route:screen object for home screen
        35/create utils.js
        36/export parseRequestURL()
        37/set url as hash address split by slash
        38/return resource, id and verb of url
        39/update router()
        40/set request as parseRequestURL()
        41/build parsedUrl and compare with routes
        42/if route exists render it, else render Error404
        43/create screens/Error404.js and render error message


#6..Create Node.JS Server
        44/run npm init in root jsamazona folder
        45/npm install express
        46/create server.js
        47/add start command as node backend/server.js
        48/require express
        49/move data.js from frontend to backend
        50/create route for /api/products
        51/return products in data.js
        52/run npm start


#7...Load Products From Backend
        53/edit HomeScreen.js
        54/make render async
        55/fetch products from '/api/products' in render()
        56/make router() async and call await HomeScreen.render()
        57/use cors on backend
        58/check the result


#8...Add Webpack
        59/cd frontend
        60/npm install -D webpack webpack-cli webpack-dev-server
        61/npm uninstall live-server
        62/"start": "webpack-dev-server --mode development --watch-content-base --open"
        63/move index.html, style.css and images to frontend folder
        64/rename app.js to index.js
        65/update index.html
        66/add script main.js before body tag
        67/npm start
        68/npm install axios
        69/change fetch to axios in HomeScreen


#9...Install Babel For ES6 Syntax
        70/npm install -D babel core, cli, node, preset-env
        71/Create .babelrc and set presets to @babel/preset-env
        72/npm install -D nodemon
        73/set start: nodemon --watch backend --exec babel-node 74backend/server.js
        75/convert require to import in server.js
        76/npm start


#10...Enable Code Linting
        77/npm install -D eslint
        78/install VSCode eslint extension
        79/create .eslintrc and set module.exports for env to node
        80/Set VSCode setting for editor.codeActionsOnSave source.81/fixAll.eslint to true
        82/check result for linting error
        83/npm install eslint-config-airbnb-base and eslint-plugin-import
        84/set extends to airbnb-base
        85/set parserOptions to ecmaVersion 11 and sourceType to module
        86/set rules for no-console to 0 to ignore linting error
