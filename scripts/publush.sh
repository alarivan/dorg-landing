#!/usr/bin/env bash

# die on error
set -e

# https://gist.github.com/cjus/1047794
echo 'Retrieving latest deploy...'
url=`curl -H "Authorization: Bearer $NETLIFY_AUTH" https://api.netlify.com/api/v1/sites/$NETLIFY_SITE/deploys`
temp=`echo $url | sed 's/\\\\\//\//g' | sed 's/[{}]//g' | awk -v k="text" '{n=split($0,a,","); for (i=1; i<=n; i++) print a[i]}' | sed 's/\"\:\"/\|/g' | sed 's/[\,]/ /g' | sed 's/\"//g' | grep -w -m 1 'id'`

# https://open-api.netlify.com/#operation/restoreSiteDeploy
# https://docs.netlify.com/api/get-started/#restore-deploy-rollback
echo "Publishing build ${temp##*|}..."
curl -X POST -H "Authorization: Bearer $NETLIFY_AUTH" -d "{}" "https://api.netlify.com/api/v1/sites/$NETLIFY_SITE/deploys/${temp##*|}/restore"

# https://open-api.netlify.com/#operation/lockDeploy
# https://docs.netlify.com/site-deploys/manage-deploys/#locked-deploys
echo "Locking deploy to ${temp##*|}..."
curl -X POST -H "Authorization: Bearer $NETLIFY_AUTH" -d "{}" "https://api.netlify.com/api/v1/deploys/${temp##*|}/lock"
