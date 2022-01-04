cd ../..

for file in DSC01843 DSC01856 DSC01893
do
 convert "photo_original/10/$file.JPG" -resize $p "photo/10/$file.JPG"
done
