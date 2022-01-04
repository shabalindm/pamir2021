cd ../..
rm photo/9/*
for file in DSC01510 DSC01544 DSC01580 DSC01617 DSC01636 DSC01685 DSC01503
do
 convert "photo_original/9/$file.JPG" -resize $p "photo/9/$file.JPG"
done
