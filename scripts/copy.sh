TargetDir=$1
rsync -av --progress ../. $TargetDir --exclude .git --exclude .vscode --exclude node_modules
