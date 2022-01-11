cd ../..
rm photo/20/*
for file in                 
do
 convert "photo_original/20/$file.JPG" -resize $p "photo/20/$file.JPG"
done
