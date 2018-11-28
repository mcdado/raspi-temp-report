rsync -a --exclude-from=./.rsyncrc ./ $1:$(basename `pwd`)
