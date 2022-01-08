cd ../..
rm photo/17/*
for file in  DSC04888 DSC04972 DSC04981   DSC05069 DSC05084
do
 convert "photo_original/13/$file.JPG" -resize $p "photo/17/$file.JPG"
done
