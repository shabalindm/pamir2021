cd ../..
rm photo/2/*
for file in DSC09195 DSC09269 DSC09332 DSC09382 DSC09400 DSC09454
do
  convert "photo_original/2/$file.JPG" -resize $p "photo/2/$file.JPG"
done