#!/bin/bash

case "$1" in
  prod)
    docker stop react-app
    docker rm -f react-app
    docker run -p 80:80 --name react-app app-prod 
    echo "Visit: http://localhost:80/"
    ;;
  dev)
    docker-compose -f docker-compose.dev.yml up 
    echo "Visit: http://localhost:3000/"
    ;;
  clr)
    docker rm -f app-dev
    docker rm -f react-app
    echo "$clearing"
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
