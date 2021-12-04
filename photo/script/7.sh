cd ../..
rm photo/7/*
for file in DSC00972  DSC01077
do
  convert "photo_original/7/$file.JPG" -resize $p "photo/7/$file.JPG"
done
