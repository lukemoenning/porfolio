# My Personal Website

## Deploy to GitHub Pages
> $ npm run deploy -- -m "Deploy Portfolio to GitHub Pages" <br />

## Run with docker-compose 
> $ docker-compose up -d <br />
> $ docker-compose down <br />
> $ docker-compose up -d --build <br />

## Run with docker
> $ docker pull lukemoenning/portfolio <br />
> **$ docker run -d -p 3000:3000 --name portfolio lukemoenning/portfolio** <br />
> $ docker build -t lukemoenning/portfolio . <br />
> $ docker exec -it portfolio bash <br />