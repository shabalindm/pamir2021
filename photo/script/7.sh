cd ../..
rm photo/7/*
for file in DSC00972 DSC01077 DSC01058 DSC01166  DSC01118    DSC01180  DSC01206 DSC01224 DSC01235 DSC01246    DSC01292
do
 convert "photo_original/7/$file.JPG" -resize $p "photo/7/$file.JPG"
done
