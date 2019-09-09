#!/bin/sh

FILE=$(fzf)
eval "$1 \$FILE"
