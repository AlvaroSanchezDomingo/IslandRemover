#!/bin/bash

for (( i=1; $i <= 5; ++i )); do
    echo "Generating Level $i Solution" 
    deno run main.ts $i > "$i.test"
    echo "Looking for diffs with correct solution (blank means successful)"
    diff "$i.test" "./results/$i.good"
    echo -e "\n"
    rm "$i.test"
done

echo "End"
