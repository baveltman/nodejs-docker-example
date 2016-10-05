FROM ubuntu:14.04
RUN apt-get update -y && \
	sudo apt-get -y install nodejs \
	&& sudo apt-get -y install npm
COPY . /src
RUN cd /src; npm install
EXPOSE 3000
CMD ["nodejs", "/src/app.js"]
