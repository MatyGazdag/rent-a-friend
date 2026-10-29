#!/bin/bash
set -e

if [ "$NODE_ENV" = "development" ]; then
    echo "Running development mode: uploading dummy data"
    mv ./04-filldummydata.sql.disabled ./04-filldummydata.sql
else
    echo "Running production mode"
fi