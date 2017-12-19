#!/bin/env bash

scriptsrc=$(dirname ${BASH_SOURCE[0]})

cp $scriptsrc/hooks/* $scriptsrc/../.git/hooks/
