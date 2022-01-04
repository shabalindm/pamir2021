cd ../..
rm photo/3/*
for file in DSC09595 DSC09622 DSC09687 DSC09832 DSC09793 DSC09834 DSC09896
do
  convert "photo_original/3/$file.JPG" -resize $p "photo/3/$file.JPG"
done