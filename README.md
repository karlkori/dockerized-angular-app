# Simple example how to pack Angular app (or any other front-end app) into docker container

## Steps

- Install `docker` https://www.docker.com/docker-ubuntu

- Build image `docker build -t dockerized-angular-app .`

- Run container from image `docker run -it -p 80:5000 dockerized-angular-app`

- Open http://127.0.0.1 - your angular app should be served

