#!/bin/sh

FILE=$(ag -n -g '' | fzf -m)

if [ -n "$2" ]
then
	eval "$1 \$FILE $2"
else
	eval "$1 \$FILE"
fi
