# My Personal Website

## Deploy to GitHub Pages
> $ npm run deploy -- -m "Deploy Trackify  to GitHub Pages" <br />

## Run with docker-compose 
> $ docker-compose up -d <br />
> $ docker-compose down <br />
> $ docker-compose up -d --build <br />

## Run with docker
> $ docker pull lukemoenning/personal-website <br />
> **$ docker run -d -p 3000:3000 --name trackify lukemoenning/trackify** <br />
> $ docker build -t lukemoenning/personal-website . <br />
> $ docker exec -it trackify bash <br />