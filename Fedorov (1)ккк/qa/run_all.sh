#!/bin/bash

for test in ~/qa/test_*.sh; do
    echo "--- $(basename $test) ---"
    bash "$test"                 
done
