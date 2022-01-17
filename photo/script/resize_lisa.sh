for directory in /git/pamir2021/photo/*
do
  for file in $directory/*.JPG
  do
    mysize=$(find "$file" -printf "%s")
  if [ $mysize -gt 5000000 ] #[$mysize -gt 10000000]
  then
      echo $file
      convert $file -resize 30% $file
  fi

  done
done

