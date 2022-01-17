for directory in /git/pamir2021/photo/*
do
  for file in $directory/*.png
  do
      echo $file
      convert $file -resize 15% ${file/png/JPG}

  done
done

