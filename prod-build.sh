#!/usr/bin/env bash
ng build --prod
http-server -c-1 dist\PWABay-Ang
