cd ../..
rm photo/8/*
for file in DSC01332 DSC01369 DSC01377 DSC01390 DSC01437 DSC01467
do
 convert "photo_original/8/$file.JPG" -resize $p "photo/8/$file.JPG"
done
