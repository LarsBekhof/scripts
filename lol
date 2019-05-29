#!/bin/bash

curl -s http://api.icndb.com/jokes/random\?firstName\=\&lastName\=$USER | ag -o "\"joke\": \".+\"," | sed -ne 's|^"joke"\:\s"||p' | sed -ne 's|",$||p'
