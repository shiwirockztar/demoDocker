### Stage 1: Build ###

FROM node:18.10-alpine As build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build 

### Stage 2: Run ###

FROM nginx:1.17.1-alpine As prod-stage
COPY --from=build /app/dist/sistema-bingo-frontend /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]


### COMANDOS DOCKER ###
#docker ps ->muestra los contenedores que corren

#docker ps -a ->muestra todos los contenedores

#docker images ->muestra todas las imagenes

#docker build -t nombreimagen . ->crear imagen de docker

#docker run -d -it -p 9000:80 --name nombrecontenedor nombreimagen ->correr imagen de docker

#docker stop CONTAINER-ID ->docker stop 01bac1d78e0c

#docker rm CONTAINER-ID->eliminar contenedor

#docker rmi IMAGE-ID ->eliminar imagen (se pueden colocar varios id para eliminar varias imagenes ala vez)

# https://www.youtube.com/watch?v=6VKUiBb_RI4 ->Tutorial - Crear un contenedor de Docker y Angular 9 - NodeJs & Nginx (ESPAÑOL)
