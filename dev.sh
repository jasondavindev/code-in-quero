BASE=$(pwd)

function dkup {
  CD=$(pwd)
  cd $BASE
  docker-compose -f docker/docker-compose.yml up
  exitcode=$?
  cd $CD
  return $exitcode
}

function dkudown {
  CD=$(pwd)
  cd $BASE
  docker-compose -f docker/docker-compose.yml down
  exitcode=$?
  cd $CD
  return $exitcode
}

function installpkg {
  CD=$(pwd)
  cd $BASE/backend && yarn && cd $BASE/frontend && yarn
  exitcode=$?
  cd $CD
  return $exitcode
}
