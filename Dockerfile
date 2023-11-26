FROM node

#Environment
ENV key=value

#RUN exceute linux command
RUN mkdir -p /home/app 

#Executed on the host, it copy file from host to the container.
COPY . /home/app

#Entry point of the application. Dockerfile only has one CMD commnad.
CMD [ "node","server.js" ];



