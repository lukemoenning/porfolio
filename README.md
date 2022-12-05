# My Personal Website

## Deploy to GitHub Pages
> $ npm run deploy -- -m "Deploy Trackify  to GitHub Pages" 

## Run with docker-compose 
> $ docker-compose up -d 
> $ docker-compose down 
> $ docker-compose up -d --build

## Run with docker
> $ docker pull lukemoenning/personal-website 
> **$ docker run -d -p 3000:3000 --name trackify lukemoenning/trackify** 
> $ docker build -t lukemoenning/personal-website .
> $ docker exec -it trackify bash 