FROM ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y && \
    apt-get install -y python3 libpq-dev python3-dev python3-pip nginx && \
    pip3 install uwsgi

COPY . .
WORKDIR .

RUN pip3 install -r requirements.txt

CMD [ "python3", "server.py" ]