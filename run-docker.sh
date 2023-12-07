#!/bin/bash

case "$1" in
  prod)
    echo "Visit: http://localhost:80/"
    docker stop react-app
    docker rm -f react-app
    docker run -p 80:80 --name react-app app-prod 
    ;;
  dev)
    echo "Visit: http://localhost:3000/"
    docker-compose -f docker-compose.dev.yml up 
    ;;
  clr)
    docker rm -f app-dev
    docker rm -f react-app
    ;;
  help)
    echo "prod - Starts production version of react"
    echo "dev - Starts development version of react"
    echo "clr - Deletes containers for portfolio"
    ;;
  *)
    echo "Usage: $0 {prod|dev|clr|help}"
    exit 1
    ;;
esac
