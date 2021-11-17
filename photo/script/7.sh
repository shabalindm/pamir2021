cd ../..
rm photo/1/*
for file in DSC08925 DSC08970 DSC09182
do
  convert "photo_original/1/$file.JPG" -resize $p "photo/1/$file.JPG"
done
