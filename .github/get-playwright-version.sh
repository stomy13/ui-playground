#!/bin/bash

pnpm exec playwright --version | awk '{print $2}'