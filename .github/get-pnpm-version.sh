#!/bin/bash

node -p "require('./package.json').packageManager.replace('pnpm@', '')"