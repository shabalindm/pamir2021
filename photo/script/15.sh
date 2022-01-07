cd ../..
rm photo/15/*
for file in DSC03728 DSC03772 DSC03776 DSC03786 DSC03810 DSC03820 DSC03928 DSC03978 DSC04017 DSC04032
do
 convert "photo_original/13/$file.JPG" -resize $p "photo/15/$file.JPG"
done
