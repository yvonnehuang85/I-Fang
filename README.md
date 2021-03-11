# personal website -------- I-Fang

## How to run on local ReactJS
1. Clone my repository
   - $ git clone https://github.com/yvonnehuang85/I-Fang/
   
2. Open the file in vscode and click new terminal
   - $ cd I-Fang
   - $ npm install
   - $ npm start
   
3. View localhost:3000 in your local machine


## How to deploy the ReactJS app to github.io
   - make sure every thing run correctly on localhost:3000
   - $ git init
   - $ git remote add origin git@github.com:yvonnehuang85/I-Fang.git
   - $ npm install gh-pages --save

   - Modify package.json
      - add "homepage": "http://yvonnehuang85.github.io/I-Fang" at the top
      -  add in script:
         - "predeploy": "npm run build",
         - "deploy": "gh-pages -d build",

## View My Website:
http://yvonnehuang85.github.io/I-Fang
