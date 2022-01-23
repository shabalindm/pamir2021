for directory in /git/pamir2021/photo/*
do
#  mkdir ${directory/photo/preview}
  for file in $directory/*.JPG
  do
     convert $file -resize x90 ${file/photo/preview}

  done
done

