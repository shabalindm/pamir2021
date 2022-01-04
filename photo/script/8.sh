cd ../..
rm photo/8/*
for file in    DSC01390  DSC01467
do
 convert "photo_original/8/$file.JPG" -resize $p "photo/8/$file.JPG"
done
